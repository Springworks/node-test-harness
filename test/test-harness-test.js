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
