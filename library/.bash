#!/bin/bash

function install () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm install --prefix {}
}

function start () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm start --prefix {} 
}

function start-prod () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm run start:prod --prefix {} 
}

function watch () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm run watch --prefix {} 
}

$1