const express = require('express');

const app = express();
const port = 7865;

app.get('/', (request, response) => {
	response.send('Welcome to the payment system');
});

// New endpoint
app.get('/cart/:id([0-9]+)', (request, response) => {
	const id = request.params.id;
	response.send(`Payment methods for cart ${id}`);
});

app.use((req, res) => {
	res.status(404).send('Not Found');
});

app.listen(port, () => {
	console.log("API available on localhost port 7865");
});

module.exports = app;

