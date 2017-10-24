import EventEmitter from 'events';

export const emitter = new EventEmitter();

export const ON_NOTIFICATION_RECEIVED = 'ON_NOTIFICATION_RECEIVED';

export function trigger(text) {
  console.log('emitter.js :::', emitter._events);
  emitter.emit(ON_NOTIFICATION_RECEIVED, text);
}
