const { emitter, ON_NOTIFICATION_RECEIVED, trigger } = require('./emitter');
const action = require('./action');

emitter.on(ON_NOTIFICATION_RECEIVED, console.log);
console.log('index.js :::', emitter._events);
action('Indirect call');
trigger('Direct call')
