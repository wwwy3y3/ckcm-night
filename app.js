
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , os = require('os')
  ,lessMiddleware = require('less-middleware');

  var tmpDir = os.tmpDir();

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(lessMiddleware({
        dest: __dirname + '/public/stylesheets',
        src: __dirname + '/public/stylesheets',
        prefix: '/stylesheets',
        compress: true
    }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(tmpDir));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/specialthx', routes.specialthx);
app.get('/contacts', routes.contacts);
app.get('/actors', routes.actors);
app.get('/guests', routes.guests);
app.get('/sponsors', routes.sponsors);
app.get('/compaign', routes.compaign);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
