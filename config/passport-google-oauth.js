const passport=require("passport");
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User= require('../models/user_schema');

//we will take client id and cle=ient secret by creating credential on google
passport.use(new googleStrategy({
        clientID: "68323168508-0k8kuf5ujhaq1dub61bgdu6pbc51hbun.apps.googleusercontent.com",
        clientSecret: "zw2pgKxEPvlSRdcPgw_I1m5F",
        callbackURL: "http://localhost:8000/users/auth/google/callback"
    },

    function(accessToken,refreshToken,profile,done){
        //here we find the user using gmail
        User.findOne({email:profile.emails[0].value}).exec(function(err,user){
            if(err){
                req.flash('error',err);
                return done(err);
            }

            // console.log(profile);
            //if user available in our database then we only login user usinf google
            if(user){
                return done(null,user);
            }else{
                //otherwise we create the user using random password and login by google
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    profileurl:profile.photos[0].value,
                }, function(err,user){
                    if(err){
                        console.log("error in creating user using  google strtaegy",err);
                        return;
                    }
                    return done(null,user);
                });
            }
        });
    }

));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});



//we will check the user is login or not
passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/users/login');
}

//here we set the user in locals
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
        console.log(res.locals.user);
    }
    next();
}


module.exports=passport;