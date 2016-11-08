class MeEvent{
  id:string = new Array(20).fill(0).map(()=>{
       return Math.round(Math.random()*20).toString(21);
     }).join('').toUpperCase();
  name:string;
  func:Function;
  constructor(event_name:string,func:Function){
     this.name = event_name;
     this.func = func;
  }
}

declare var module;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MeEvent;
}