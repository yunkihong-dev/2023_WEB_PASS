const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
    console.log('hi')
}); 

app.get('/main', function(req, res) {
	res.send('main 페이지입니다.');
});

app.get('/test', function(req, res) {
	res.send('test 페이지입니다.');
});