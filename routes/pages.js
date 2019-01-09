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

    let pageData = {
        isAuthenticated: false,
        user: null
    }

    if(req.session.passport && req.session.passport.user) {

        pageData.isAuthenticated = true;
        pageData.useruser = req.session.passport.user;

    }

    res.render('pages/home.ejs', pageData);

})

router.get("/createaccount", (req, res) => {

    if(req.session.passport && req.session.passport.user) {

        res.redirect("/home");

    }

    res.render("pages/newaccount.ejs", {isAuthenticated: false, user: null});

});

router.get("/shop", (req, res) => {

    if(!req.session.passport) {

        res.redirect("/createaccount")

    }

    let pageData = {
        isAuthenticated: true,
        user: req.session.passport.user
    };

    res.render('pages/shop.ejs', pageData);

});

router.get("/passwords", (req, res) => {

    if(!req.session.passport) {

        res.redirect("/createaccount")

    }

    let pageData = {
        isAuthenticated: true,
        user: req.session.passport.user
    };

    res.render('pages/passwords.ejs', pageData);

});

router.get("/help", (req, res) => {

    let pageData = {
        isAuthenticated: false,
        user: null
    }

    if(req.session.passport && req.session.passport.user) {

        pageData.isAuthenticated = true;
        pageData.useruser = req.session.passport.user;

    }

    res.render('pages/help.ejs', pageData);

});

router.get("/", (req, res) => {

    res.redirect("/home");

})


module.exports = router;
