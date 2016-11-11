class ListenMe {
  static listenMe(theThis) {
    if (typeof theThis === 'undefined') {
      (<any>this).eventListener = new MeListener();
      (<any>this).addEventListener = (<any>this).eventListener.addEventListener.bind((<any>this).eventListener);
      (<any>this).dispatchEvent = (<any>this).eventListener.dispatchEvent.bind((<any>this).eventListener);
      (<any>this).removeEventListener = (<any>this).eventListener.removeEventListener.bind((<any>this).eventListener);
    } else {
      theThis.eventListener = new MeListener();
      theThis.addEventListener = theThis.eventListener.addEventListener.bind(theThis.eventListener);
      theThis.dispatchEvent = theThis.eventListener.dispatchEvent.bind(theThis.eventListener);
      theThis.removeEventListener = theThis.eventListener.removeEventListener.bind(theThis.eventListener);
    }
  };
}
(<any>ListenMe).listenme = ListenMe.listenMe;
(<any>ListenMe).ListenMe = ListenMe.listenMe;

declare var module, require;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    listenme: ListenMe.listenMe,
    listenMe: ListenMe.listenMe,
    ListenMe: ListenMe.listenMe,
    MeListener: MeListener,
    MeEvent: MeEvent
  };
}