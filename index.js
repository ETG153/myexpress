const express = require('express');
const app = express();

// Called after every request
app.use((req,res,next) => {
	console.log('Request received at ' + Date.now());
	next();
});

// Post
app.post('/',(req,res) => {
	res.send(req.body);
	console.log('You\'ve got mail!');
	console.log(req.body);
});

// Landing page:
app.get('/',(req,res) => res.send('Landing successful!'));

// Home page:
app.get('/home',(req,res) => {
	res.send('Home Page');
});

// Page that returns the parameter you give it
app.get('/givemebackmyparameter/:parameter',(req,res) => {
	res.send(req.params.parameter);
});

// Page that returns both of your parameters
app.get('/givemebackbothofmyparameters/:parameter1&:parameter2',(req,res) => {
	res.send(req.params.parameter1 + ' ' + req.params.parameter2);
});

// Error page 418
app.get('/418',(req,res) => {
	res.send('HTTP ERROR 418<br/>I\'m a teapot');
});

// Error page 404
app.get('*',(req,res) => {
	res.send(`OOPSIE WOOPSIE!!<br/>
		Looksie like you make a fucky wucky!!<br/>
		A wittle fucko boingo!<br/>
		For real tho, double check the URL.<br/>
		Maybe you mistyped it or something.`);
});

app.listen(3000, () => console.log('Example app listening on port 3000'));
