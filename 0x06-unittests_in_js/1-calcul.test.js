// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
	describe('SUM', () => {
		it('should return 6 when inputs are 1.4 and 4.5', () => {
			assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
		});

		it('should return 5 when inputs are 1.2 and 3.7', () => {
			assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
		});

		it('should return 0 when inputs are -1.4 and 1.4', () => {
			assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
		});
	});

	describe('SUBTRACT', () => {
		it('should return -3 when inputs are 1.2 and 3.7', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
		});

		it('should return -2 when inputs are -1.4 and 1.4', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 1.4), -2);
		});
	});

	describe('DIVIDE', () => {
		it('should return 0.2 when inputs are 1.4 and 4.5', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		});

		it('should return 0.5 when inputs are 1.2 and 2.4', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 1.2, 2.4), 0.5);
		});

		it('should return "Error" when inputs are 1.4 and 0', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
		});

		it('should return "Error" when inputs are 1.4 and 0.3 (rounded to 0)', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.3), 'Error');
		});
	});
});

