if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/dialog.production.min');
} else {
  module.exports = require('./dist/dialog.development');
}
