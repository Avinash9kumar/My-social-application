const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({

usernameField:'email',
passReqToCallback:true
},
function(req,email,password,done){

User.findOne({email:email},function(err,user){

if (err){
    req.flash("error",err);
    return done(err);}

if (!user || user.password != password){
    
    req.flash("error","Invalid Username/Password");

return done(null,false);

}

return done(null,user);

});

}

));



// serialing

passport.serializeUser(function(user,done){

done(null,user.id);

});


// deserialing

passport.deserializeUser(function(id,done){


 User.findById(id,function(err,user){

    if (err){console.log('Error in finding user ---> Passport'); return done(err);}

    return done(null,user);
 });   


    });
    

// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;

    }

  return  next();
}




    module.exports = passport;