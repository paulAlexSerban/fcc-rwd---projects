#!/bin/bash

function install () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm install --prefix {} 
}

function build-static () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm run build-static --prefix {} 
}

function build-static-prod () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm run build-static:prod --prefix {} 
}

function watch-tp-jerryThomas () {
  find . -maxdepth 3 -path './library/tributePage/jerryThomas' | xargs -P5 -I {} npm run watch --prefix {} 
}

function watch-sf-cocktailExperience () {
  find . -maxdepth 3 -path './library/surveyForm/cocktailExperience' | xargs -P5 -I {} npm run watch --prefix {} 
}

$1