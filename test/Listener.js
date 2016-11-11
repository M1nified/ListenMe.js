var Listener = require('../build/Listener.js'),
  MeEvent = require('../build/MeEvent.js'),
  should = require('chai').should();

describe('Listener Class', () => {

  describe('instance:', () => {
    var listener1, event1a, event1b;
    var testarr = [];
    beforeEach(() => {
      testarr = [];
      listener1 = new Listener();
      event1a = listener1.addEventListener('event1', () => {
        testarr.push(1);
      })
      event1b = listener1.addEventListener('event1', () => {
        testarr.push(2);
      })
    });

    describe('event creation - addEventListener()', () => {
      var testvar = false;
      beforeEach(() => {
        testvar = false;
        listener1.addEventListener('event2', () => {
          testvar = true;
        });
      });

      it('should create an event', () => {
        listener1.events.event2.should.exist;
        listener1.events.event2[0].should.exist;
        listener1.events.event2[0].should.be.instanceOf(MeEvent);
        // console.log(listener1.events.event2[0])
      });

    });

    describe('event dispatching', () => {

      describe('dispatch order', () => {

        it('should dispatch events in registration order', () => {
          listener1.dispatchEvent('event1').should.be.true;
          testarr.should.eql([1, 2]);
        });

        it('should return false if no such event', () => {
          listener1.dispatchEvent('non_existing_event').should.be.false;
        });

      });

    });

    describe('event removal - removeEventListener()', () => {

      it('should remove given event', () => {
        (function () {
          listener1.removeEventListener(event1a)
        }).should.not.throw();
        listener1.events.event1.should.not.have.keys([
          'event1a'
        ])
      });

      it('should remove all events named as given', () => {
        (function () {
          listener1.removeEventListener('event1');
        }).should.not.throw();
        listener1.events.should.not.have.keys([
          'event1'
        ]);
      });

      it('should throw if wrong name applied', () => {
        (function(){
          listener1.removeEventListener('non_existing_event')
        }).should.throw();
        listener1.events.should.have.all.keys([
          'event1'
        ]);
      });

    });


  });

});
