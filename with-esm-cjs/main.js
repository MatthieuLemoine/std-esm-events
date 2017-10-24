import start from './client';
import { emitter, ON_NOTIFICATION_RECEIVED } from './client/socket';

emitter.on(ON_NOTIFICATION_RECEIVED, console.log);
console.log(emitter);
start();
