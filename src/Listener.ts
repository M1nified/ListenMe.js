declare var module, require;
{
  let MeEvent = require('./MeEvent.js');
  class Listener {
    events: { [name: string]: MeEvent[] } = {};
    constructor() {

    }

    addEventListener(event_name: string, func: Function) {
      this.ensureEventExistance(event_name);
      let event = new MeEvent(event_name, func);
      this.events[event_name].push(event);
      return event;
    }

    dispatchEvent(event_name) {
      if (!this.events[event_name] || Object.keys(this.events[event_name]).length === 0) {
        // throw "No such event (" + event_name + ")";
        return false;
      }
      this.events[event_name].forEach((event) => {
        event.func.call(this);
      });
      return true;
    }

    removeEventListener(event: MeEvent | string) {
      if (typeof event === 'string' && this.events[event]) {
        delete this.events[event];
      } else if (typeof event === 'object' && event.name && event.id) {
        let index = this.events[(<MeEvent>event).name].findIndex((eventArray) => {
          return eventArray.id === (<MeEvent>event).id;
        });
        delete this.events[(<MeEvent>event).name][index];
      } else {
        throw "Bad argument.";
      }
    }

    ensureEventExistance(event_name: string) {
      this.events[event_name] || (this.events[event_name] = []);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Listener;
  }
}