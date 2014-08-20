SVG Icon Server
===============

<h3> An Node.JS map icon SVG server designed for use in CartoCSS point-file:url()'s. </h3> <br>
<p> Usage: <br>
The site uses a RESTful API to return the SVG files using the following syntax. <br> <br>

COLOR NAMES:
/:iconType/:borderColorName/:fillColorName
This syntax uses <a href='http://www.december.com/html/spec/colorsvg.html'> svg named colors </a> 
Example: <a href='/star/grey/black'> /star/grey/black </a> 

HEX COLOR IDs:
/hex/:iconType/:borderHexCode/:fillHexCode  
This syntax uses hex color codes without a #, e.g. 0006db not #0006db. 
Example: <a href='/hex/star/9c9a9e/000'> /hex/star/9c9a9e/000 </a> 

The following iconTypes are currently available,
* square 
* star 
* triangle 
* diamond 



Example server can be found at svg.galenevans.org.

e.g: svg.galenevans.org/star/blue/green


Created by Galen Evans, www.galenevans.org. 
