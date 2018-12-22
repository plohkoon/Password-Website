//initiating dependencies
const   url = require('url'),
        http = require('http'),
        path = require('path'),
        bodyParser = require('body-parser'),
        ejs = require('ejs');
//intiating express and routers
const   express =require('express'),
        router = express.Router();

router.get("/", (req, res) => {

    res.render('pages/newaccount.ejs');

})


module.exports = router;
