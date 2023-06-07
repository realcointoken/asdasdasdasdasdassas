variable "region" {
  default = "us-east-2"
}

variable "cidr_block" {
  default = "172.17.0.0/16"
}

variable "az_count" {
  default = "2"
}

variable "domain" {
  description = "domain of deployment"
  default     = "backend"
}

variable "stage" {
  description = "stage of deployment"
  default     = "production"
}

variable "environment" {
  description = "env we're deploying to"
  default     = "mainnet"
}

variable "cartographer_image_tag" {
  type        = string
  description = "cartographer image tag"
  default     = "ghcr.io/connext/cartographer-routers:0.2.0-beta.10"
}

variable "certificate_arn" {
  default = "arn:aws:acm:us-east-2:679752396206:certificate/eecbb4dd-f537-40f0-afdb-233ee066ba80"
}

variable "postgres_password" {
  type = string
}

variable "postgres_user" {
  type    = string
  default = "connext"
}

variable "dd_api_key" {
  type = string
}

variable "carto_messages_heartbeat" {
  type = string
}

variable "carto_roots_heartbeat" {
  type = string
}

variable "carto_routers_heartbeat" {
  type = string
}

variable "carto_transfers_heartbeat" {
  type = string
}

variable "graph_api_key" {
  type = string
}
