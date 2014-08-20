SVG Icon Server
===============

A Node.JS server with a API for creating SVG Icons to used in CartoCSS mapping applications 

<h3> An Node.JS map icon SVG server designed for use in CartoCSS point-file:url()'s. </h3> <br>
<p> Usage: <br>
The site uses a restful API to return the SVG files using the following syntax. <br> <br>
/:iconType/:borderColorName/:fillColorName <br> 
- This syntax uses <a href='http://www.december.com/html/spec/colorsvg.html'> svg named colors </a> <br> <br>
Example: <a href='/star/grey/black'> /star/grey/black </a> <br> <br>
/hex/:iconType/:borderHexCode/:fillHexCode <br>  
- This syntax uses hex color codes without a #, e.g. 0006db not #0006db. <br>  <br>
Example: <a href='/hex/star/9c9a9e/000'> /hex/star/9c9a9e/000 </a> <br> <br> <br>
The following iconTypes are currently available, <br>
<li> square </li>
<li> star </li>
<li> triangle </li>
<li> diamond </li>
<br>
<br>
Created by Galen Evans, www.galenevans.org. </p>
