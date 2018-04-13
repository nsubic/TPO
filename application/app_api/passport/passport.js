// config/passport.js
				
// load all the things we need
var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;


// expose this function to our app using module.exports
module.exports = function(passport) {

	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(upIme, done) {
		global.connection.query("select * from Oseba where upIme = "+upIme,function(err,rows){	
			done(err, rows[0]);
		});
    });
	

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(new LocalStrategy({
        
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'upIme',
        passwordField : 'geslo',
    }, 
    function(req, upIme, geslo, done) { // callback with email and password from our form
        console.log("Prijava")
         global.connection.query('SELECT * FROM Oseba WHERE upIme = ?', [req.params.upIme],function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'Napačno uporabniško ime.')); // req.flash is the way to set flashdata using connect-flash
            } 
			
			// if the user is found but the password is wrong
            if (!( rows[0].geslo == geslo))
                return done(null, false, req.flash('loginMessage', 'Napačno geslo.')); // create the loginMessage and save it to session as flashdata
            // all is well, return successful user
            return done(null, rows[0]);			
		
		});
		


    }));

};