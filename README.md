SVG Icon Server
===============

<h3> An Node.JS map icon SVG server designed for use in CartoCSS point-file:url()'s. </h3> <br>
<p> Usage: <br>
The site uses a RESTful API to return the SVG files using the following syntax. <br> <br>

######COLOR NAMES:
/:iconType/:borderColorName/:fillColorName <br />
This syntax uses <a href='http://www.december.com/html/spec/colorsvg.html'> svg named colors </a>  <br />

######HEX COLOR IDs: <br />
/hex/:iconType/:borderHexCode/:fillHexCode  <br />
This syntax uses hex color codes without a #, e.g. 0006db not #0006db.<br />

The following iconTypes are currently available, <br />
* square 
* star 
* triangle 
* diamond 

Created by Galen Evans
