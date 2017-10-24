const start = require('./client');
const { emitter, ON_NOTIFICATION_RECEIVED } = require('./client/socket');

emitter.on(ON_NOTIFICATION_RECEIVED, console.log);
console.log(emitter);
start();
