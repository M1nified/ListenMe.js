var ListenMe = require('../build/aio.js'),
  should = require('chai').should();


describe('ListenMe Class', () => {

  describe('module.exports', () => {

    it('should contain all required functions', () => {
      ListenMe.should.have.all.keys([
        'listenme',
        'listenMe',
        'ListenMe',
        'MeListener',
        'MeEvent'
      ]);
      ListenMe.listenme.should.be.a('function');
    });

  });

  describe('listenme() and alises', () => {

    var object1, object2;
    beforeEach(() => {
      object1 = {
        func1: function () {
          ListenMe.listenme.call(this);
        }
      };
      object2 = {
        func1: function () {
          ListenMe.listenme(this);
        }
      };
    });

    it('should create listener for calling object .call(this)', () => {
      object1.func1();
      object1.should.contain.all.keys([
        'addEventListener',
        'dispatchEvent',
        'removeEventListener'
      ]);
    });

    it('should create listener for calling object this as an argument', () => {
      object2.func1();
      object2.should.contain.all.keys([
        'addEventListener',
        'dispatchEvent',
        'removeEventListener'
      ]);
    });

  });

});
