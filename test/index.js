var Event = require('../index.js'),
  should = require('chai').should();


describe('index.js', () => {

  it('should export all functions', () => {
    Event.should.have.all.keys([
        'listenme',
        'listenMe',
        'ListenMe',
        'Listener',
        'Event'
    ])
  });

});
