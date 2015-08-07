var msb = require('msb');
var app = exports;
var config = require('./lib/config');
var router = require('./lib/router');

app.config = config;
app.router = router;

app.start = function() {
  app.router.load(app.config.routes);

  app.namespaces = app.config.routes.map(function(route) {
    return route.bus.namespace;
  });

  console.log('bus2http listening on ' + app.namespaces.join(', '));
};
