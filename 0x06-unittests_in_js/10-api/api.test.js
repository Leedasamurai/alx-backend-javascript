const request = require("request");
const {describe, it, before, after} = require("mocha");
const expect = require("chai").expect;

const BASE_URL = "http://localhost:7865";

describe("Index page", function() {
	const options = {
		url: `${BASE_URL}/`,
		method: "GET"
	};

	it("check correct status code", function(done) {
		request(options, function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();
		});
	});

	it("check correct content", function(done) {
		request(options, function(err, res, body) {
			expect(body).to.contain("Welcome to the payment system");
			done();
		});
	});

	it("check correct content length", function(done) {
		request(options, function(err, res, body) {
			expect(res.headers['content-length']).to.equal('29');
			done();
		});
	});
});

describe("Cart page", function() {
	it("check correct status code when :id is a number", function(done) {
		const options = {
			url: `${BASE_URL}/cart/12`,
			method: "GET"
		};
		request(options, function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();
		});
	});

	it("check correct status code when :id is NOT a number", function(done) {
		const options = {
			url: `${BASE_URL}/cart/hello`,
			method: "GET"
		};
		request(options, function(err, res, body) {
			expect(res.statusCode).to.equal(404);
			done();
		});
	});
});

describe("Available payments", function() {
	it("check correct content and status code", function(done) {
		const options = {
			url: `${BASE_URL}/available_payments`,
			method: "GET"
		};
		request(options, function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
			done();
		});
	});
});

describe("Login", function() {
	it("check correct status code and response when userName is provided", function(done) {
		const options = {
			url: `${BASE_URL}/login`,
			method: "POST",
			json: true,
			body: {
				userName: "Betty"
			}
		};
		request(options, function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			expect(body).to.equal("Welcome Betty");
			done();
		});
	});
});

