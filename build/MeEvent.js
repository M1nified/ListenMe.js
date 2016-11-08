class MeEvent {
    constructor(event_name, func) {
        this.id = new Array(20).fill(0).map(() => {
            return Math.round(Math.random() * 20).toString(21);
        }).join('').toUpperCase();
        this.name = event_name;
        this.func = func;
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MeEvent;
}
//# sourceMappingURL=MeEvent.js.map