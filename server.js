var express = require('express'),
    passport = require('passport'),
    flash = require('connect-flash'),
    http = require('http'),
    builder = require('xmlbuilder'),
    LocalStrategy = require('passport-local').Strategy;
  

var app = express();


// configure Express
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.engine('ejs', require('ejs-locals'));
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'super cat' }));
  app.use(flash());
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use('/app', app.router);
  app.use(express.static(__dirname + '/public'));
});


function createSVG(type, size, border, fill, swidth){
    var svg;
    console.log(border)

    if(type === 'square'){
      svg = builder.create('svg', {'version': '1.0', 'encoding':'UTF8', 'standalone': 'no'})
                      .att('width', size+10).att('height', size+10).att('version', '1.1').att('xmlns', 'http://www.w3.org/2000/svg')
                     .ele('rect', {"y": "4", "x":"4", 'width': size, 'height': size, 'stroke':border, 'fill': fill, 'stroke-width': swidth})
                  .end({pretty: true});
    }
    if(type === 'star'){
      svg = builder.create('svg', {'version': '1.0', 'encoding':'UTF8', 'standalone': 'no'})
                      .att('width', size+10).att('height', size+10).att('version', '1.1').att('xmlns', 'http://www.w3.org/2000/svg')
                     .ele('path', {'d': "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z", 'stroke':border, 'fill': fill, 'stroke-width': swidth-3})
                  .end({pretty: true});
    }
    if(type === 'triangle'){
      svg = builder.create('svg', {'version': '1.0', 'encoding':'UTF8', 'standalone': 'no'})
                      .att('width', size+10).att('height', size+10).att('version', '1.1').att('xmlns', 'http://www.w3.org/2000/svg')
                     .ele('polygon', {'points': "61.7128129211,56.6666666667 6.2871870789,56.6666666667 36,8.6666666667 ", 'stroke':border, 'fill': fill, 'stroke-width': swidth})
                  .end({pretty: true});
    }
    if(type === 'diamond'){
      svg = builder.create('svg', {'version': '1.0', 'encoding':'UTF8', 'standalone': 'no'})
                      .att('width', size+10).att('height', size+10).att('version', '1.1').att('xmlns', 'http://www.w3.org/2000/svg')
                     .ele('polygon', {'points': "61.7128129211,56.6666666667 36,104.6666666667 6.2871870789,56.6666666667 36,8.6666666667", 'stroke':border, 'fill': fill, 'stroke-width': swidth})
                  .end({pretty: true});
    }
    if(type === 'hex'){
      svg = builder.create('svg', {'version': '1.0', 'encoding':'UTF8', 'standalone': 'no'})
                      .att('width', size+10).att('height', size+10).att('version', '1.1').att('xmlns', 'http://www.w3.org/2000/svg')
                     .ele('polygon', {'points': "72.3,31.4 54.3,62.5769145 18.3,62.5769145 0.3,31.4 18.3,0.2230855 54.3,0.2230855 72.3,31.4", 'stroke':border, 'fill': fill, 'stroke-width': swidth})
                  .end({pretty: true});
    }
    return svg;
}



app.get('/', function(req, res){
  res.render('index');
});


app.get('/:type/:border/:fill', function(req, res){
  res.set({'Content-Type': 'image/svg+xml'})
  res.send(createSVG(req.params.type, '50', req.params.border, req.params.fill, "5"))
});

app.get('/hex/:type/:border/:fill', function(req, res){
  var border = '#' + req.params.border;
  var fill = '#' + req.params.fill;
  console.log(border)
  res.set({'Content-Type': 'image/svg+xml'})
  res.send(createSVG(req.params.type, '50', border, fill, "5"))
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Express server listening on port:' + port);
});



