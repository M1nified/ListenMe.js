var MeEvent = require('../build/MeEvent.js'),
  should = require('chai').should();


describe('MeEvent Class', () => {

  describe('constructor()', () => {
    var meevent;
    beforeEach(() => {
      meevent = new MeEvent('event1', function () { });
    });

    it('should assign name', () => {
      meevent.name.should.equal('event1');
    });

    it('should assign function', () => {
      meevent.func.should.exist;
      meevent.func.should.be.a('function');
    });

    it('should create an id', () => {
      meevent.id.should.be.a('string');
      meevent.id.should.have.length(20);
    });

  });

});
