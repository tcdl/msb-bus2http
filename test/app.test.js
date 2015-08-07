/* Setup */
var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var beforeEach = lab.beforeEach;
var after = lab.after;
var afterEach = lab.afterEach;
var expect = Code.expect;

/* Modules */
var simple = require('simple-mock');
var msb = require('msb');
var app = require('../app');
var config = require('../lib/config');
var router = require('../lib/router');

describe('app', function() {
  afterEach(function(done) {
    simple.restore();
    done();
  });

  describe('start()', function() {
    it('should load routes', function(done) {
      simple.mock(router, 'load').returnWith();

      app.start();

      expect(router.load.called).true();
      expect(router.load.lastCall.args[0]).equals(config.routes);

      done();
    });
  });
});
