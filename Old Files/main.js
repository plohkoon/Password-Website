var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (req, res) {

    var parser = url.parse(req.url, true);

    var path = "." + parser.pathname;

    console.log(path);
    //var pageReq = url.pathname.toString();

    fs.readFile(path, function(err, data) {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
        res.end()

    })

})

server.listen(8080);
