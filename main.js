const url = require('url');
const http = require('http');

const express = require('express');
const app = express()
const port = 8080

app.use(express.static('public'));

app.post('/public/newAccount.html', function(req, res) {

    console.log(req);

})

app.listen(port);
