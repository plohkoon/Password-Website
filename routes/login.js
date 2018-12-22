//initiating dependencies
const   url = require('url'),
        http = require('http'),
        path = require('path'),
        bodyParser = require('body-parser'),
        ejs = require('ejs');
//intiating express and routers
const   express = require('express'),
        router = express.Router();

router.use(express.static("public"));


router.post("/", (req, res) => {

    res.render('pages/home.ejs', {isAuthenticated: false, user: "Greg"});

})


module.exports = router;
