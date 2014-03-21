VERSION = $(shell grep \"version\" manifest.json | cut -d: -f2 | sed 's/^.*"\(.*\)".*/\1/')

zip:
	git archive -o silence-$(VERSION).zip HEAD
