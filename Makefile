build-deps:
	npm install

build:
	docker build -t dominion79/charity-component .

push:
	@docker login -u $(DOCKER_USERNAME) -p $(DOCKER_PASSWORD) 
	docker push dominion79/charity-component