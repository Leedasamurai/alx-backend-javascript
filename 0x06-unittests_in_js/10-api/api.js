const express = require('express');

const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (request, response) => {
	response.send('Welcome to the payment system');
});

app.get('/cart/:id', (request, response) => {
	const { id } = request.params;
	if (isNaN(id)) {
		response.status(404).send('Not Found');
	} else {
		response.send(`Payment methods for cart ${id}`);
	}
});

app.get('/available_payments', (request, response) => {
	response.json({
		payment_methods: {
			credit_cards: true,
			paypal: false
		}
	});
});

app.post('/login', (request, response) => {
	const { userName } = request.body;
	response.send(`Welcome ${userName}`);
});

app.listen(port, () => {
	console.log(`API available on localhost port ${port}`);
});

module.exports = app;

