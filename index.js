if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/Dialog.production.min');
} else {
  module.exports = require('./dist/Dialog.development');
}
