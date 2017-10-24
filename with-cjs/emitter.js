const EventEmitter = require('events');

const emitter = new EventEmitter();

const ON_NOTIFICATION_RECEIVED = 'ON_NOTIFICATION_RECEIVED';

module.exports = {
  emitter,
  ON_NOTIFICATION_RECEIVED,
  trigger,
}

function trigger(text) {
  console.log('emitter.js :::', emitter._events);
  emitter.emit(ON_NOTIFICATION_RECEIVED, text);
}
