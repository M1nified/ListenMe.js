var Event = require('../index.js'),
  should = require('chai').should();


describe('Scenario 1', () => {
  var instance1;
  class Scenario1 {
    constructor() {
      this.arr1 = [];
      this.arr2 = [];
      Event.listenme(this);
      this.addEventListener("func1_start", () => {
        this.arr1.push(1);
      })
      this.addEventListener("func1_end", () => {
        this.arr1.push(3);
      })
    }
    func1() {
      this.dispatchEvent("func1_start");
      this.arr1.push(2);
      this.dispatchEvent("func1_end");
    }
    func2() {
      this.dispatchEvent("func2_start");
      this.arr2.push(2);
      this.dispatchEvent("func2_end");
    }
  }

  beforeEach(() => {
    instance1 = new Scenario1();
  });

  it('should trigger events for func1', () => {
    instance1.func1();
    instance1.arr1.should.eql([1, 2, 3]);
  });

  it('should pass if events not applied (func2)', () => {
    (function () {
      instance1.func2();
    }).should.not.throw();
    instance1.arr2.should.eql([2]);
  });

  it('should trigger event from outside', () => {
    let value1 = false;
    instance1.addEventListener('func2_end',()=>{
      value1 = true;
    });
    instance1.func2();
    value1.should.be.true;
  });

});
