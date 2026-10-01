open:
	xdg-open index.html

style:
	prettier --write *.html && sed -i 's| /||g' *.html
	prettier --write *.css *.js