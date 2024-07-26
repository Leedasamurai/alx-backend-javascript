const app = require('./index');

app.get('/', (req, res) => {
	res.send('Welcome to the API');
});

module.exports = app;

