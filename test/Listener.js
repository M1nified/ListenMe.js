var Listener = require('../build/Listener.js'),
  MeEvent = require('../build/MeEvent.js'),
  should = require('chai').should();

describe('Listener Class', () => {

  describe('instance:', () => {
    var listener1;
    beforeEach(() => {
      listener1 = new Listener();
    });

    describe('event creation - addEventListener()', () => {
      var testvar = false;
      beforeEach(() => {
        testvar = false;
        listener1.addEventListener('event1', () => {
          testvar = true;
        });
      });

      it('should create an event', () => {
        listener1.events.event1.should.exist;
        listener1.events.event1[0].should.exist;
        listener1.events.event1[0].should.be.instanceOf(MeEvent);
        // console.log(listener1.events.event1[0])
      });

    });

    describe('event dispatching', () => {
      var testarr = [];
      beforeEach(() => {
        testarr = [];
        listener1.addEventListener('event1', () => {
          testarr.push(1);
        })
        listener1.addEventListener('event1', () => {
          testarr.push(2);
        })
      });

      describe('dispatch order', () => {
        
        it('should dispatch events in registration order', () => {
          listener1.dispatchEvent('event1');
          testarr.should.eql([1,2]);
        });
          
      });

    });


  });

});
