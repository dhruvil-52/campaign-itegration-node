const routes = require("./routes/index");
var bodyParser = require('body-parser');
var express = require("express")
var app = express()
var http = require("http")
var config = require("./config")


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var urlencodedParser = bodyParser.json({limit: '50mb', extended: true})
app.use(urlencodedParser)
app.use(express.json({limit: '50mb'}));


routes(app);

var server = http.createServer(app).listen(config.get('server.port') , function () {
    console.log("Api running on " + config.get('server.port') + " port")
});

