import { emitter, ON_NOTIFICATION_RECEIVED, trigger } from './emitter';
import action from './action'

emitter.on(ON_NOTIFICATION_RECEIVED, console.log);
console.log('index.js :::', emitter._events);
action('Indirect call');
trigger('Direct call')
