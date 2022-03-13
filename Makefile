clean-ds-store:
	rm -rfv .DS_Store & rm -rfv */.DS_Store & rm -rfv */*/.DS_Store & rm -rfv */*/*/.DS_Store & rm -rfv */*/*/*/.DS_Store

install: clean-ds-store
	bash core/.bash install & bash library/.bash install

start: clean-ds-store
	bash core/.bash start & bash library/.bash start

start-prod: clean-ds-store
	bash library/.bash start-prod

stop:
	echo "stop"

watch:
	bash library/.bash watch

start-static:
	echo "start core instance - bash core/.bash start-static"

build-static: clean-ds-store
	bash library/.bash build-static

build-static-prod: clean-ds-store
	bash library/.bash build-static-prod

deploy-static:
	echo "deploy each library subproject to core running instance"

watch-static-tp-jerryThomas:
	bash library/.bash watch-tp-jerryThomas