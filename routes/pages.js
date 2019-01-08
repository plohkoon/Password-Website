//initiating dependencies
const   url = require('url'),
        http = require('http'),
        path = require('path'),
        bodyParser = require('body-parser'),
        ejs = require('ejs');
//intiating express and routers
const   express =require('express'),
        router = express.Router();

router.use(express.static("public"));


router.get("/home", (req, res) => {

    //console.log(req.session.passport.user !== null);
    console.log(req.session);

    let authenticated = false,
        user = null;

    if(req.session.passport && req.session.passport.user) {

        authenticated = true;
        user = req.session.passport.user;

    }

    res.render('pages/home.ejs', {isAuthenticated: authenticated, user: user});

})

router.get("/createaccount", (req, res) => {

    if(req.session.passport && req.session.passport.user) {

        res.redirect("/home");

    }

    res.render("pages/newaccount.ejs", {isAuthenticated: false, user: null});

});


module.exports = router;
