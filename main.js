//initiating dependencies
const   url = require('url'),
        http = require('http'),
        path = require('path'),
        bodyParser = require('body-parser'),
        ejs = require('ejs'),
        methodOverride = require('method-override'),
        passport = require('passport'),
        mongoose = require('mongoose'),
        LocalStrategy = require('passport-local').Strategy,
        session = require('express-session'),
        userModel = require('./models/userModel');

//initiating routes
const   pages = require('./routes/pages'),
        account = require('./routes/account');

//initiating the server
const   express = require('express'),
        serv = express(),
        port = 8080;

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true});
//uses the userModel and its incorporated strategy
passport.use(new LocalStrategy(userModel.authenticate()));

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

//add bodyParser for POST requests
serv.use(bodyParser.urlencoded(({extended:false})));
serv.use(bodyParser.json());
serv.use(session({secret: 'sessionsecret', resave: false, saveUninitialized: true, cookie: {secure: false}}));
//setting method override
serv.use(methodOverride('_method'));
//setting the public
serv.use(express.static("public"));
//initializing passport and session credentials
serv.use(passport.initialize());
serv.use(passport.session());

//changing the view engine to render EJS
serv.set('view engine', 'ejs');
//setting all the routes
serv.use("/account", account);

//the main path for page renders
serv.use("/", pages);

serv.listen(port);
