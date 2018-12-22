//initiating dependencies
const   url = require('url'),
        http = require('http'),
        path = require('path'),
        bodyParser = require('body-parser'),
        ejs = require('ejs'),
        methodOverride = require('method-override'),
        passport = require('passport');

//initiating routes
const   home = require('./routes/home'),
        newaccount = require('./routes/newaccount'),
        login = require('./routes/login');

//initiating the server
const   express = require('express'),
        serv = express(),
        port = 8080;

//add bodyParser for POST requests
serv.use(bodyParser.urlencoded(({extended:false})));
serv.use(bodyParser.json());

serv.use(methodOverride('_method'));

serv.use(express.static("public"));

//changing the view engine to render EJS
serv.set('view engine', 'ejs');

serv.all("/", (req, res) => {

    res.redirect("/home");

});

serv.use("/home", home);

serv.use("/newaccount", newaccount);

serv.use("/login", login);

serv.listen(port);
