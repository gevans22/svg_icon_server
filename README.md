SVG Icon Server
===============

<h3> An Node.JS map icon SVG server designed for use in CartoCSS point-file:url()'s. </h3> <br>
<p> Usage: <br>
The site uses a RESTful API to return the SVG files using the following syntax. <br> <br>

######COLOR NAMES:
/:iconType/:borderColorName/:fillColorName <br />
This syntax uses <a href='http://www.december.com/html/spec/colorsvg.html'> svg named colors </a>  <br />
Example: <a href='/star/grey/black'> /star/grey/black </a>  <br />

######HEX COLOR IDs: <br />
/hex/:iconType/:borderHexCode/:fillHexCode  <br />
This syntax uses hex color codes without a #, e.g. 0006db not #0006db.<br />
Example: <a href='/hex/star/9c9a9e/000'> /hex/star/9c9a9e/000 </a>  <br />

The following iconTypes are currently available, <br />
* square 
* star 
* triangle 
* diamond 

Example server can be found at svg.galenevans.org. <br />

e.g: svg.galenevans.org/star/blue/green <br />


Created by Galen Evans, www.galenevans.org. 
