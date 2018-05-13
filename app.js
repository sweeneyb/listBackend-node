var express = require('express');
const springCloudConfig = require('spring-cloud-config');
var app = express();
 
let configOptions = {
    configPath: __dirname + '/config',
    activeProfiles: [process.env['SPRING.PROFILES.ACTIVE']],
    level: 'debug'
};
let myConfig = springCloudConfig.load(configOptions)

myConfig.then(function(result) {
    app.listen(result.port)
    console.log("listening on port: " +result.port)
    })

app.get('/', function(request, response) {
    response.send("This would be some HTML...");
});