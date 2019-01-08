//initiating dependencies
const   url                 = require('url'),
        http                = require('http'),
        path                = require('path'),
        bodyParser          = require('body-parser'),
        ejs                 = require('ejs'),
        passport            = require('passport'),
        userModel           = require('../models/userModel')
//intiating express and routers
const   express = require('express'),
        router = express.Router();

//new account
router.post("/", (req, res) => {

    console.log("got username " + req.body.username + " and password " + req.body.password);

    const   username = req.body.username,
            passwword = req.body.password;

    userModel.register(new userModel({username: username}), req.body.password, (err, user) => {

        if(err && err.name === "UserExistsError") {
            console.log("user exists");
            res.redirect("/account");
        }
        else if (err) {

            console.log(err);
            throw err;

        }

        console.log("registered user " + user);
        console.log(req.body.username, req.body.password);

        passport.authenticate('local', {successRedirect: "/home", failureRedirect: "/createaccount"});

    });

})
//login attempt
router.get("/", passport.authenticate('local', {successRedirect: "/home", failureRedirect: "/createaccount"}))
//update acount information
router.patch("/", (req, res) => {



})
//delete account
router.delete("/", (req, res) => {



})


module.exports = router;
