// Modules
var express = require('express');

var router = express.Router();

var https = require('https');

// router get request

router.get("/", function (req, res, next) {
    
    //console.log("I think it's weather.js"); debugging message to ensure correct route

    var options = {
        host: 'www.metaweather.com',
        path: '/api/location/2383660/',
        method: 'GET',
        json: true
    };

    callback = function(response) {
        var data = '';

        //appened incoming chunks to data
        response.on('data', function (chunk) {
            data += chunk;
        });

        //the whole response has been recieved; give the data to the page
        response.on('end', function () {
            data = JSON.parse(data);// Parse the Data
            console.log('STATUS: ' + res.statusCode); //Ensure 200 response; log 'data' if necessary
            res.render('weather', {
                obj: data,
                header: "Columbus Ohio Weather Forecast"
            });
        });
        
}
    //http request to source; change to http is necessary
    https.request(options, callback).end();

});

module.exports = router;