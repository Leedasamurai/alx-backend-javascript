const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /', () => {
	it('should return welcome message', (done) => {
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.text).to.equal('Welcome to the API');
				done();
			});
	});
});
