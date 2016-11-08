{
    let MeEvent = require('../build/MeEvent.js');
    class Listener {
        constructor() {
            this.events = {};
        }
        addEventListener(event_name, func) {
            this.ensure_event_existance(event_name);
            let event = new MeEvent(event_name, func);
            this.events[event_name].push(event);
        }
        dispatchEvent(event_name) {
            if (!this.events[event_name] || Object.keys(this.events[event_name]).length === 0) {
                throw "No such event (" + event_name + ")";
            }
            this.events[event_name].forEach((event) => {
                event.func.call(this);
            });
        }
        ensure_event_existance(event_name) {
            this.events[event_name] || (this.events[event_name] = []);
        }
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Listener;
    }
}
//# sourceMappingURL=Listener.js.map