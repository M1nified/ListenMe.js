{
    let MeEvent = require('./MeEvent.js');
    class Listener {
        constructor() {
            this.events = {};
        }
        addEventListener(event_name, func) {
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
        removeEventListener(event) {
            if (typeof event === 'string' && this.events[event]) {
                delete this.events[event];
            }
            else if (typeof event === 'object' && event.name && event.id) {
                let index = this.events[event.name].findIndex((eventArray) => {
                    return eventArray.id === event.id;
                });
                delete this.events[event.name][index];
            }
            else {
                throw "Bad argument.";
            }
        }
        ensureEventExistance(event_name) {
            this.events[event_name] || (this.events[event_name] = []);
        }
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Listener;
    }
}
//# sourceMappingURL=Listener.js.map