const SendGridTransport = require('./lib/sendgrid_transport');

module.exports = function(options) {
    return new SendGridTransport(options);
};
