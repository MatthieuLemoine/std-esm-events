import EventEmitter from 'events';

export const emitter = new EventEmitter();

export const ON_NOTIFICATION_RECEIVED = 'ON_NOTIFICATION_RECEIVED';

export function init() {
  console.log(emitter);
  emitter.emit(ON_NOTIFICATION_RECEIVED, 'HEY');
}
