terraform {
  backend "s3" {
    bucket = "nxtp-terraform-mainnet-prod-core"
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


module "router_subscriber" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  internal_lb              = false
  docker_image             = var.full_image_name_router_subscriber
  container_family         = "router-subscriber"
  health_check_path        = "/ping"
  container_port           = 8080
  loadbalancer_port        = 80
  cpu                      = 512
  memory                   = 1024
  instance_count           = 3
  timeout                  = 180
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.router_env_vars
}

module "router_publisher" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  internal_lb              = false
  docker_image             = var.full_image_name_router_publisher
  container_family         = "router-publisher"
  health_check_path        = "/ping"
  container_port           = 8080
  loadbalancer_port        = 80
  cpu                      = 512
  memory                   = 1024
  instance_count           = 1
  timeout                  = 180
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.router_env_vars
}

module "router_executor" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  internal_lb              = false
  docker_image             = var.full_image_name_router_executor
  container_family         = "router-executor"
  health_check_path        = "/ping"
  container_port           = 8080
  loadbalancer_port        = 80
  cpu                      = 1024
  memory                   = 2048
  instance_count           = 1
  timeout                  = 180
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.router_env_vars
}

module "router_web3signer" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  docker_image             = "ghcr.io/connext/web3signer:latest"
  container_family         = "router-web3signer"
  health_check_path        = "/upcheck"
  container_port           = 9000
  loadbalancer_port        = 80
  cpu                      = 256
  memory                   = 512
  instance_count           = 1
  timeout                  = 180
  internal_lb              = true
  ingress_cdir_blocks      = [module.network.vpc_cdir_block]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.router_web3signer_env_vars
}

module "centralised_message_queue" {
  source              = "../../../modules/amq"
  stage               = var.stage
  environment         = var.environment
  sg_id               = module.network.ecs_task_sg
  vpc_id              = module.network.vpc_id
  zone_id             = data.aws_route53_zone.primary.zone_id
  publicly_accessible = true
  subnet_ids          = module.network.public_subnets
  rmq_mgt_user        = var.rmq_mgt_user
  rmq_mgt_password    = var.rmq_mgt_password
}

module "sequencer_server" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  docker_image             = var.full_image_name_sequencer_server
  container_family         = "sequencer"
  health_check_path        = "/ping"
  container_port           = 8081
  loadbalancer_port        = 80
  cpu                      = 1024
  memory                   = 2048
  instance_count           = 1
  timeout                  = 180
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.sequencer_env_vars
}

module "sequencer_publisher" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  docker_image             = var.full_image_name_sequencer_publisher
  container_family         = "sequencer-publisher"
  health_check_path        = "/ping"
  container_port           = 8082
  loadbalancer_port        = 80
  cpu                      = 1024
  memory                   = 2048
  instance_count           = 1
  timeout                  = 180
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.sequencer_env_vars
}

module "sequencer_publisher_auto_scaling" {
  source           = "../../../modules/auto-scaling"
  stage            = var.stage
  environment      = var.environment
  domain           = var.domain
  ecs_service_name = module.sequencer_publisher.service_name
  ecs_cluster_name = module.ecs.ecs_cluster_name
}

module "sequencer_subscriber" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  internal_lb              = false
  docker_image             = var.full_image_name_sequencer_subscriber
  container_family         = "sequencer-subscriber"
  health_check_path        = "/ping"
  container_port           = 8083
  loadbalancer_port        = 80
  cpu                      = 4096
  memory                   = 8192
  instance_count           = 3
  timeout                  = 180
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.sequencer_env_vars
}

module "sequencer_subscriber_auto_scaling" {
  source           = "../../../modules/auto-scaling"
  stage            = var.stage
  environment      = var.environment
  domain           = var.domain
  ecs_service_name = module.sequencer_subscriber.service_name
  ecs_cluster_name = module.ecs.ecs_cluster_name
}


module "sequencer_web3signer" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  docker_image             = "ghcr.io/connext/web3signer:latest"
  container_family         = "sequencer-web3signer"
  health_check_path        = "/upcheck"
  container_port           = 9000
  loadbalancer_port        = 80
  cpu                      = 256
  memory                   = 512
  instance_count           = 1
  timeout                  = 180
  internal_lb              = true
  ingress_cdir_blocks      = [module.network.vpc_cdir_block]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.sequencer_web3signer_env_vars
}

module "lighthouse_prover_cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-lighthouse"
  docker_image_tag    = var.lighthouse_image_tag
  container_family    = "lighthouse-prover"
  environment         = var.environment
  stage               = var.stage
  container_env_vars = merge(local.lighthouse_env_vars, {
    LIGHTHOUSE_SERVICE = "prover"
  })
  schedule_expression = "rate(15 minutes)"
  memory_size         = 4096
  timeout             = 900
}

module "lighthouse_process_from_root_cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-lighthouse"
  docker_image_tag    = var.lighthouse_image_tag
  container_family    = "lighthouse-process-from-root"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.lighthouse_env_vars, { LIGHTHOUSE_SERVICE = "process" })
  schedule_expression = "rate(30 minutes)"
  memory_size         = 1536
}


module "lighthouse_propagate_cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-lighthouse"
  docker_image_tag    = var.lighthouse_image_tag
  container_family    = "lighthouse-propagate"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.lighthouse_env_vars, { LIGHTHOUSE_SERVICE = "propagate" })
  schedule_expression = "rate(30 minutes)"
  memory_size         = 1024
}

module "lighthouse_sendoutboundroot_cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-lighthouse"
  docker_image_tag    = var.lighthouse_image_tag
  container_family    = "lighthouse-sendoutboundroot"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.lighthouse_env_vars, { LIGHTHOUSE_SERVICE = "sendoutboundroot" })
  schedule_expression = "rate(30 minutes)"
  memory_size         = 512
}


module "relayer" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  docker_image             = var.full_image_name_relayer
  container_family         = "relayer"
  health_check_path        = "/ping"
  container_port           = 8080
  loadbalancer_port        = 80
  cpu                      = 1024
  memory                   = 2048
  instance_count           = 1
  timeout                  = 180
  internal_lb              = false
  ingress_cdir_blocks      = [module.network.vpc_cdir_block]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.relayer_env_vars
}

module "relayer_web3signer" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  docker_image             = "ghcr.io/connext/web3signer:latest"
  container_family         = "relayer-web3signer"
  health_check_path        = "/upcheck"
  container_port           = 9000
  loadbalancer_port        = 80
  cpu                      = 256
  memory                   = 512
  instance_count           = 1
  timeout                  = 180
  internal_lb              = true
  ingress_cdir_blocks      = [module.network.vpc_cdir_block]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.relayer_web3signer_env_vars
}

module "watcher" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  docker_image             = var.full_image_name_watcher
  container_family         = "watcher"
  health_check_path        = "/ping"
  container_port           = 8080
  loadbalancer_port        = 80
  cpu                      = 1024
  memory                   = 2048
  instance_count           = 1
  timeout                  = 180
  internal_lb              = false
  ingress_cdir_blocks      = [module.network.vpc_cdir_block]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.watcher_env_vars
}

module "watcher_web3signer" {
  source                   = "../../../modules/service"
  stage                    = var.stage
  environment              = var.environment
  domain                   = var.domain
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  docker_image             = "ghcr.io/connext/web3signer:latest"
  container_family         = "watcher-web3signer"
  health_check_path        = "/upcheck"
  container_port           = 9000
  loadbalancer_port        = 80
  cpu                      = 256
  memory                   = 512
  instance_count           = 1
  timeout                  = 180
  internal_lb              = true
  ingress_cdir_blocks      = [module.network.vpc_cdir_block]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.watcher_web3signer_env_vars
}


module "network" {
  source      = "../../../modules/networking"
  stage       = var.stage
  environment = var.environment
  domain      = var.domain
  cidr_block  = var.cidr_block
}

module "sgs" {
  source         = "../../../modules/sgs/core"
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

module "sequencer_cache" {
  source                        = "../../../modules/redis"
  stage                         = var.stage
  environment                   = var.environment
  family                        = "sequencer"
  sg_id                         = module.network.ecs_task_sg
  vpc_id                        = module.network.vpc_id
  cache_subnet_group_subnet_ids = module.network.public_subnets
}

module "router_cache" {
  source                        = "../../../modules/redis"
  stage                         = var.stage
  environment                   = var.environment
  family                        = "router"
  sg_id                         = module.network.ecs_task_sg
  vpc_id                        = module.network.vpc_id
  cache_subnet_group_subnet_ids = module.network.public_subnets
}

module "relayer_cache" {
  source                        = "../../../modules/redis"
  stage                         = var.stage
  environment                   = var.environment
  family                        = "relayer"
  sg_id                         = module.network.ecs_task_sg
  vpc_id                        = module.network.vpc_id
  cache_subnet_group_subnet_ids = module.network.public_subnets
}
