
#!/bin/bash

function build-static () {
  cp -rfv ./dashboard/source/* ./dashboard/dist &&
  cp -rfv ./dashboard/dist/* ./core/dist/app/
}

function build-static-prod () {
  cp -rfv ./dashboard/source/* ./dashboard/dist &&
  cp -rfv ./dashboard/dist/* ./core/dist/app/
}

$1