
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , io = require('socket.io');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8101);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.about);
app.get('/twitter', routes.twitter);

http = http.createServer(app);
io = io.listen(http);

http.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
