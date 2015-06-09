[![Build Status](https://img.shields.io/travis/Springworks/node-test-harness.svg?style=flat)](https://travis-ci.org/Springworks/node-test-harness)
[![Coverage Status](https://img.shields.io/coveralls/Springworks/node-test-harness.svg?style=flat)](https://coveralls.io/r/Springworks/node-test-harness)
[![Peer Dependencies](http://img.shields.io/david/peer/Springworks/node-test-harness.svg?style=flat)](https://david-dm.org/Springworks/node-test-harness#info=peerDependencies&view=table)


# test-harness

Setup `should` and `sinon` with plugins.

- Add [should](https://www.npmjs.com/package/should) to the global scope.
- Add [sinon](https://www.npmjs.com/package/sinon) to the global scope.
- Install the [should-sinon](https://www.npmjs.com/package/should-sinon) plugin.
- Install the [should-promised](https://www.npmjs.com/package/should-promised) plugin.
- Install the [should-http](https://www.npmjs.com/package/should-http) plugin.


## Install

```
$ npm i -D mocha should
$ npm i -D @springworks/test-harness
```


## Usage

Require `@springworks/test-harness` using the `--require` option when running tests with mocha.

```
$ mocha --require @springworks/test-harness test
```

The `--require` option can be added to a [mocha.opts](http://mochajs.org/#mocha.opts) file.

Example `mocha.opts` file:

```
--ui bdd
--check-leaks
--recursive
--slow 200
--reporter spec
--compilers js:babel/register
--require @springworks/test-harness
```


## Example test file

No need to require `should`, `sinon` or any of the plugins.

```js
describe('test-harness', function() {

  describe('globals', function() {

    it('should expose should as a global', function() {
      should.exist(should);
    });

    it('should expose sinon as a global', function() {
      should.exist(sinon);
    });

  });

  describe('should-sinon plugin', function() {

    it('should use the should-sinon plugin', function() {
      const test_stub = sinon.stub().returns('hello');
      test_stub().should.eql('hello');
      test_stub.should.have.callCount(1);
    });

  });

  describe('should-promised plugin', function() {

    it('should use the should-promised plugin', function() {
      return Promise.resolve().should.be.fulfilled();
    });

  });

  describe('should-http plugin', function() {

    it('should use the should-http plugin', function() {
      ({ statusCode: 200 }).should.have.status(200);
    });

  });

});
```
