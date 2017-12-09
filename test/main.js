const sgTransport = require('../index');
const expect = require('chai').expect;
const pkg = require('../package.json');

let transport = null;

describe('Sendgrid Transport', function() {
    it('should take an apikey', function () {
        transport = sgTransport({'auth': {api_key: 'test'}});
    });

    it('should have a name and version', function () {
        expect(transport.name).to.eq('SendGrid');
        expect(transport.version).to.eq(pkg.version);
    });

});