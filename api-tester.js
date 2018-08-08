'use strict';

const assert = require('assert');

const api = {

  configureStaticApi(apiServerCreator, port) {
    assert(typeof apiServerCreator === 'function', 'apiServerCreator has to be function to create static api');
    assert(port, 'Port has to be specified');

    let beforeFn;
    if (typeof before === 'function') {
      beforeFn = before;
    }
    else if (typeof beforeAll === 'function') {
      beforeFn = beforeAll;
    }

    assert(beforeFn, 'Must have either before() or beforeAll() available');

    let afterFn;
    if (typeof after === 'function') {
      afterFn = after;
    }
    else if (typeof afterAll === 'function') {
      afterFn = afterAll;
    }

    assert(afterFn, 'Must have either after() or afterAll() available');

    let server;

    beforeFn(() => {
      return apiServerCreator({ port: port }).then(created_server => {
        server = created_server;
        return server.start();
      });
    });

    afterFn(() => {
      return server.stop();
    });
  },

};

// exported in a way that is compatible with both `require` and `import`
module.exports = api;
module.exports.default = api;
Object.defineProperty(module.exports, '__esModule', { value: true });
