.PHONY: all clean start

all: clean
	mkdir out
	nodefront compile -r -o out
	cp -ar img out
	cp css/*.css out/css

clean:
	rm -f *.html
	rm -f css/site.css
	rm -rf out

start:
	nodefront serve -c -l
