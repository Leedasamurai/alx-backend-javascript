const { expect } = require('chai');
const { exec } = require('child_process');

describe('displayMessage', () => {
	it('should print "Hello NodeJS!" to STDOUT', (done) => {
		exec('node 0-main.js', (error, stdout) => {
			expect(stdout.trim()).to.equal('Hello NodeJS!');
			done();
		});
	});
});

