declare class MeEvent {
    id: string;
    name: string;
    func: Function;
    constructor(event_name: string, func: Function);
}
