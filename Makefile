clean-ds-store:
	rm -rfv .DS_Store & rm -rfv */.DS_Store & rm -rfv */*/.DS_Store & rm -rfv */*/*/.DS_Store & rm -rfv */*/*/*/.DS_Store

clean-core-dist:
	@echo "CLEANING ./core/dist directory"
	@rm -rfv ./core/dist

install: clean-ds-store
	bash core/.bash install & bash library/.bash install

start-static: clean-core-dist
	@echo "STARTING ./core static instance"
	@bash core/.bash start-static

stop-static:
	@echo "STOPING ./core instance"
	@bash core/.bash stop

build-static-dev: clean-ds-store
	bash library/.bash build-static

build-static-prod: clean-ds-store
	bash library/.bash build-static-prod

deploy-static:
	echo "deploy each library subproject to core running instance"

watch-static-tp-jerryThomas:
	bash library/.bash watch-tp-jerryThomas