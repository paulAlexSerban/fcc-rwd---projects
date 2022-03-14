#!/bin/bash

function install () {
  echo 'install core'
}

function start-static () {
  mkdir ./core/dist &
  cp -rfv ./core/source/docker/nginx/* ./core/dist/ &
  cp -rfv ./core/source/nginx/* ./core/dist/ &&
  docker-compose -f ./core/dist/docker-compose.yml up -d --build
}

function stop () {
  docker-compose -f ./core/dist/docker-compose.yml down -v
}

$1