// 4-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
	let calculateNumberStub;
	let consoleSpy;

	beforeEach(() => {
		calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
		consoleSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		calculateNumberStub.restore();
		consoleSpy.restore();
	});

	it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
		expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
	});
});

