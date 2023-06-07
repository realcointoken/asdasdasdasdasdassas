terraform {
  backend "s3" {
    bucket = "nxtp-terraform-testnet-staging-backend"
    key    = "state/"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.region
}

# Fetch AZs in the current region
data "aws_availability_zones" "available" {}

data "aws_iam_role" "ecr_admin_role" {
  name = "erc_admin_role"
}


data "aws_route53_zone" "primary" {
  zone_id = "Z03634792TWUEHHQ5L0YX"
}

module "cartographer_db" {
  domain                = "cartographer"
  source                = "../../../modules/db"
  identifier            = "rds-postgres-cartographer-${var.environment}-${var.stage}"
  instance_class        = "db.t3.medium"
  allocated_storage     = 150
  max_allocated_storage = 300


  name     = "connext" // db name
  username = var.postgres_user
  password = var.postgres_password
  port     = "5432"

  maintenance_window = "Mon:00:00-Mon:03:00"

  tags = {
    Environment = var.environment
    Domain      = var.domain
  }

  vpc_id = module.network.vpc_id

  hosted_zone_id             = data.aws_route53_zone.primary.zone_id
  stage                      = var.stage
  environment                = var.environment
  db_security_group_id       = module.sgs.rds_sg_id
  db_subnet_group_subnet_ids = module.network.public_subnets
  publicly_accessible        = true
}

module "cartographer-db-alarms" {
  source                                  = "../../../modules/db-alarms"
  db_instance_name                        = module.cartographer_db.db_instance_name
  db_instance_id                          = module.cartographer_db.db_instance_id
  is_replica                              = false
  enable_cpu_utilization_alarm            = true
  enable_free_storage_space_too_low_alarm = true
  stage                                   = var.stage
  environment                             = var.environment
  sns_topic_subscription_emails           = ["carlo@connext.network", "rahul@connext.network"]
}

module "postgrest" {
  source                   = "../../../modules/service"
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  internal_lb              = false
  docker_image             = "postgrest/postgrest:v10.0.0.20221011"
  container_family         = "postgrest"
  container_port           = 3000
  loadbalancer_port        = 80
  cpu                      = 256
  memory                   = 512
  instance_count           = 1
  timeout                  = 180
  environment              = var.environment
  stage                    = var.stage
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn_testnet
  container_env_vars       = local.postgrest_env_vars
  domain                   = var.domain
}

module "sdk-server" {
  source                   = "../../../modules/service"
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  internal_lb              = false
  docker_image             = var.full_image_name_sdk_server
  container_family         = "sdk-server"
  container_port           = 8080
  loadbalancer_port        = 80
  cpu                      = 256
  memory                   = 512
  instance_count           = 2
  timeout                  = 180
  environment              = var.environment
  stage                    = var.stage
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn_testnet
  container_env_vars       = local.sdk_server_env_vars
  domain                   = var.domain
}

module "sdk_server_cache" {
  source                        = "../../../modules/redis"
  stage                         = var.stage
  environment                   = var.environment
  family                        = "sdk-server"
  sg_id                         = module.network.ecs_task_sg
  vpc_id                        = module.network.vpc_id
  cache_subnet_group_subnet_ids = module.network.public_subnets
}

module "cartographer-routers-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-routers"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "routers" })
  schedule_expression = "rate(1 minute)"
  memory_size         = 1024
}

module "cartographer-transfers-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-transfers"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "transfers" })
  schedule_expression = "rate(1 minute)"
  memory_size         = 1024
}

module "cartographer-messages-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-messages"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "messages" })
  schedule_expression = "rate(1 minute)"
  memory_size         = 1024
}

module "cartographer-roots-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-roots"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "roots" })
  schedule_expression = "rate(1 minute)"
  memory_size         = 1024
}

module "cartographer-stableswap-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-stableswap"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "stableswap" })
  schedule_expression = "rate(1 minute)"
  memory_size         = 1024
}

module "cartographer-messagestatus-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-messagestatus"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "messagestatus" })
  schedule_expression = "rate(1 minute)"
  memory_size         = 1024
}

module "cartographer-prices-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-prices"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "prices" })
  schedule_expression = "rate(15 minutes)"
  memory_size         = 1024
}

module "network" {
  source      = "../../../modules/networking"
  cidr_block  = var.cidr_block
  environment = var.environment
  stage       = var.stage
  domain      = var.domain
}

module "sgs" {
  source         = "../../../modules/sgs/backend"
  environment    = var.environment
  stage          = var.stage
  domain         = var.domain
  ecs_task_sg_id = module.network.ecs_task_sg
  vpc_cdir_block = module.network.vpc_cdir_block
  vpc_id         = module.network.vpc_id
}

module "ecs" {
  source                  = "../../../modules/ecs"
  stage                   = var.stage
  environment             = var.environment
  domain                  = var.domain
  ecs_cluster_name_prefix = "nxtp-ecs"
  vpc_id                  = module.network.vpc_id
  private_subnets         = module.network.private_subnets
  public_subnets          = module.network.public_subnets
}
