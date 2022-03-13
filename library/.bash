#!/bin/bash

function build-static () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm run build-static --prefix {} 
}

function build-static-prod () {
  find . -maxdepth 3 -path './library/*/*' | xargs -P5 -I {} npm run build-static:prod --prefix {} 
}

function watch-tp-jerryThomas () {
  find . -maxdepth 3 -path './library/tributePage/jerryThomas' | xargs -P5 -I {} npm run watch --prefix {} 
}

$1