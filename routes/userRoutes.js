var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('../models/user');
  

module.exports = function(app, passport) {
    
// normal routes ===============================================================
    app.get('/api/v1/users', function(req, res){
    mongoose.model('User').find({}, function(err, users){
     if(err){
       return console.log('err');
     } else {
       res.json(users);
     }
   });
 });
    // show the pages that use user refs (will also have our login links)
    app.get('/', function(req, res) {
        res.render('./pages/index.ejs', {
            user : req.user
        });
    });

    app.get('/contact', function(req, res) {
        res.render('./pages/contact.ejs', {
            user : req.user
        });
    });

    app.get('/post_blog', function(req, res) {
        res.render('./pages/post_blog.ejs', {
            user : req.user
        });
    });

    app.get('/blog', function(req, res) {
        res.render('./pages/rendered_blog.ejs', {
            user : req.user
        });
    });
    app.get('/blog', function(req, res) {
      res.render('../client/blogList.js', {
            user: req.user
       });
    });

    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.get('/loginAdmin', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });


    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/blog', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/loginAdmin', passport.authenticate('local-login', {
        successRedirect : '/blog', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // middleware 
    app.use(function (req, res, next) {
      res.locals.login = req.isAuthenticated();
      next();
    });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/blog', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) { 
         mongoose.model('Blog').find({}, 
            function(err, blogPost){
        res.render('profile.ejs', {
            user : req.user, 
            blogPost: blogPost
        })
        });
    });
    

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/blog',
            failureRedirect : '/'
        }));

    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    // =====================================
    // GITHUB ROUTES ======================
    // =====================================

    app.get('/auth/github', passport.authenticate('github'));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/github/callback',
        passport.authenticate('github', {
            successRedirect : '/blog',
            failureRedirect : '/'
        }));

    // =====================================
    // TWITTER ROUTES ======================
    // =====================================
    //route for twitter authentication and login
    app.get('/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/blog',
            failureRedirect : '/'
        }));

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/blog', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/blog',
                failureRedirect : '/sign-up'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

        // handle the callback after twitter has authorized the user
        app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                successRedirect : '/blog',
                failureRedirect : '/'
            }));

        // local -----------------------------------
    app.get('/unlink/local', function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
           res.redirect('/profile');
        });
    });

    
    //route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    };
};