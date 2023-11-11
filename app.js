const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, function() {
    console.log('server Init');
    console.log('Listening on port: ', PORT);
    console.log('hi')
}); 

app.get('/main', function(req, res) {
	res.sendFile(__dirname + '/pages/main.html');
});

app.get('/test', function(req, res) {
	res.sendFile(__dirname + '/pages/test.html');
});