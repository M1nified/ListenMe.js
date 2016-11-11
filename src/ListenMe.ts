declare var module, require;
{
  let Listener = require('./Listener.js'),
    MeEvent = require('./MeEvent.js');

  let listenMe = function (theThis) {
    if (typeof theThis === 'undefined') {
      this.eventListener = new Listener();
      this.addEventListener = this.eventListener.addEventListener.bind(this.eventListener);
      this.dispatchEvent = this.eventListener.dispatchEvent.bind(this.eventListener);
      this.removeEventListener = this.eventListener.removeEventListener.bind(this.eventListener);
    } else {
      theThis.eventListener = new Listener();
      theThis.addEventListener = theThis.eventListener.addEventListener.bind(theThis.eventListener);
      theThis.dispatchEvent = theThis.eventListener.dispatchEvent.bind(theThis.eventListener);
      theThis.removeEventListener = theThis.eventListener.removeEventListener.bind(theThis.eventListener);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      listenme: listenMe,
      listenMe: listenMe,
      ListenMe: listenMe,
      Listener,
      Event: MeEvent
    };
  }
}