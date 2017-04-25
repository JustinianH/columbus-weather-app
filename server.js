// MODULES

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var path = require('path');

var serveStatic = require('serve-static');

var routes = require('./routes/index');  
var weather = require('./routes/weather');  

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

// Set path to view directory

app.set('views', path.join(__dirname, 'views'));

// Set view engine to Embedded JavaScript (EJS)
app.set('view engine', 'ejs');

app.use(express.static('views'));
// Apply Routes
app.use('/', weather);
app.use('/weather', weather);
// Apply Port listen and confirmation message
app.listen(port, function () {
	console.log('Example app listening on port' + port + '!')
})

