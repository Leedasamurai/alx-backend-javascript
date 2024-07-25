// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
	it('should return a resolved promise with the correct data when success is true', (done) => {
		getPaymentTokenFromAPI(true).then((response) => {
			expect(response).to.eql({ data: 'Successful response from the API' });
			done();
		}).catch((error) => {
			done(error);
		});
	});

	it('should return a rejected promise with an error message when success is false', (done) => {
		getPaymentTokenFromAPI(false).then(() => {
			// This block should not be executed when success is false
			done(new Error('Promise should not be resolved'));
		}).catch((error) => {
			expect(error.message).to.equal('Operation failed');
			done();
		});
	});
});

