const {trigger } = require('./emitter');

module.exports = function action(text) {
  trigger(text)
}
