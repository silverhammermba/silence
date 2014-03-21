VERSION = $(shell git show HEAD:manifest.json | grep \"version\" | cut -d: -f2 | sed 's/^.*"\(.*\)".*/\1/')

zip:
	git archive -o silence-$(VERSION).zip HEAD
