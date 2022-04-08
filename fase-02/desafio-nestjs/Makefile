SHELL=/bin/bash

define compose
	docker-compose $(1)
endef

define run
	$(call compose,run --service-ports --rm app $(1))
endef

.PHONY: down
down:
	$(call compose,down --remove-orphans)

.PHONY: up
up:
	$(call compose,up)

.PHONY: shell
shell:
	$(call run,sh)

.PHONY: lint
lint:
	$(call run,yarn lint)

.PHONY: lint-fix
lint-fix:
	$(call run,yarn lint:fix)

.PHONY: build
build:
	$(call run,yarn build)

.PHONY: build-watch
build-watch:
	$(call run,yarn build:watch)

.PHONY: check-updates
check-updates:
	$(call run,npx --quiet --yes npm-check-updates)
