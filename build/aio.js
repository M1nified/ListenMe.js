class MeEvent {
    constructor(event_name, func) {
        this.id = new Array(20).fill(0).map(() => {
            return Math.round(Math.random() * 20).toString(21);
        }).join('').toUpperCase();
        this.name = event_name;
        this.func = func;
    }
}
class MeListener {
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
class ListenMe {
    static listenMe(theThis) {
        if (typeof theThis === 'undefined') {
            this.eventListener = new MeListener();
            this.addEventListener = this.eventListener.addEventListener.bind(this.eventListener);
            this.dispatchEvent = this.eventListener.dispatchEvent.bind(this.eventListener);
            this.removeEventListener = this.eventListener.removeEventListener.bind(this.eventListener);
        }
        else {
            theThis.eventListener = new MeListener();
            theThis.addEventListener = theThis.eventListener.addEventListener.bind(theThis.eventListener);
            theThis.dispatchEvent = theThis.eventListener.dispatchEvent.bind(theThis.eventListener);
            theThis.removeEventListener = theThis.eventListener.removeEventListener.bind(theThis.eventListener);
        }
    }
    ;
}
ListenMe.listenme = ListenMe.listenMe;
ListenMe.ListenMe = ListenMe.listenMe;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        listenme: ListenMe.listenMe,
        listenMe: ListenMe.listenMe,
        ListenMe: ListenMe.listenMe,
        MeListener: MeListener,
        MeEvent: MeEvent
    };
}
//# sourceMappingURL=aio.js.map