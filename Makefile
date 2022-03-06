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