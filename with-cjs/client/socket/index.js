const EventEmitter = require('events');

const emitter = new EventEmitter();

const ON_NOTIFICATION_RECEIVED = 'ON_NOTIFICATION_RECEIVED';

module.exports = {
  init,
  emitter,
  ON_NOTIFICATION_RECEIVED,
};

function init() {
  console.log(emitter);
  emitter.emit(ON_NOTIFICATION_RECEIVED, 'HEY');
}
