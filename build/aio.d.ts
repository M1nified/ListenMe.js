declare class MeEvent {
    id: string;
    name: string;
    func: Function;
    constructor(event_name: string, func: Function);
}
declare class MeListener {
    events: {
        [name: string]: MeEvent[];
    };
    constructor();
    addEventListener(event_name: string, func: Function): MeEvent;
    dispatchEvent(event_name: any): boolean;
    removeEventListener(event: MeEvent | string): void;
    ensureEventExistance(event_name: string): void;
}
declare class ListenMe {
    static listenMe(theThis: any): void;
}
declare var module: any, require: any;
