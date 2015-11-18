module.exports = function(app, passport) {

// normal routes ===============================================================

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

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // AUTHENTICATE (FIRST LOGIN) ==================================================

    // LOGIN ===============================
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/post_blog.html', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // SIGNUP =================================
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // AUTHORIZE (ALREADY LOGGED IN)
    app.get('/connect/local', function(req, res) {
        res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}