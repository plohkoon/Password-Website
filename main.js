const   url = require('url'),
        http = require('http'),
        path = require('path'),
        bodyParser = require('body-parser');

const   express = require('express'),
        app = express(),
        port = 8080;

app.use(bodyParser.urlencoded(({extended:false})));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {

    res.redirect('/mainPage');

})

app.get('/mainPage', function(req, res) {

    res.sendFile(path.join(__dirname + '/mainPage.html'));

})

app.get('/newAccount', function(req, res) {

    res.sendFile(path.join(__dirname + '/newAccount.html'));

})

app.get('/account', function(req, res) {

    res.sendFile(path.join(__dirname + '/account.html'));

})

app.get('/buy', function(req, res) {

    res.sendFile(path.join(__dirname + '/buy.html'));

})

app.get('/help', function(req, res) {

    res.sendFile(path.join(__dirname + '/help.html'));

})

app.get('/passwords', function(req, res) {

    res.sendFile(path.join(__dirname + '/passwords.html'));

})

app.post('/newAccount', function(req, res) {

    console.log(req.body.prefix);
    console.log(req.body.fName);
    console.log(req.body.lName);
    console.log(req.body.bDay);
    console.log(req.body.phone);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.address);
    console.log(req.body.postal);
    console.log(req.body.country);
    console.log(req.body.province);
    console.log(req.body.city);
    console.log(req.body.card);
    console.log(req.body.cvn);
    console.log(req.body.expiry);

})

app.listen(port);
