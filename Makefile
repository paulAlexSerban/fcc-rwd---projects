# CLEAN
clean-ds-store:
	rm -rfv .DS_Store & rm -rfv */.DS_Store & rm -rfv */*/.DS_Store & rm -rfv */*/*/.DS_Store & rm -rfv */*/*/*/.DS_Store

clean-core-app-library:
	@rm -rfv ./core/dist/app/library/*

clean-core-dist:
	@echo "CLEANING ./core/dist directory"
	@rm -rfv ./core/dist



# INSTALL
install-static-core: clean-core-dist
	@echo "INSTALLING ./core for static development"
	bash core/.bash install-static

install-assets:
	@echo "INSTALLING ./assets"
	bash install --prefix assets

install-dashboard:
	@echo "INSTALLING ./dashboard"
	npm install --prefix dashboard

install-library:
	@echo "INSTALLING ./library"
	npm install --prefix library

install: clean-ds-store install-static-core install-assets install-dashboard install-library



# Core START/STOP
stop-static:
	@echo "STOPING ./core instance"
	@bash core/.bash stop


### ASSETS
load-icons:
	npm run icons:load --prefix assets

create-image-renditions:
	npm run images:createRenditions --prefix assets

load-images:
	npm run images:load --prefix assets

load-assets:
	npm run assets:load --prefix assets


# BUILD for development
build-dashboard: clean-ds-store
	bash dashboard/.bash build-static

build-static-libary: clean-ds-store clean-core-app-library
	npm run build:static --prefix library

# BUILD & DEPLOY for productioin
# build-static-prod: clean-ds-store
# 	bash dashboard/.bash build-static-prod
# 	npm run build:static:deploy --prefix library

deploy-static:
	echo "get necesary files from ./core to ./target & post-clean"

# ITERATION  & WATCH
watch-library:
	npm run watch --prefix library
