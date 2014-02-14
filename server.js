var express = require('express');
var app = module.exports = express();
app.set('port', process.env.PORT || 8088);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());

app.use(express.methodOverride());
app.use(express.favicon(__dirname + '/client/img/favicon.ico'));
app.use(express.static(__dirname + '/client'));

app.use(app.router);

var routes = require('./server/routes')(app);

// Start server
app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});
