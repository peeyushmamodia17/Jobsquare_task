const express=require('express');

const router = express.Router();
const passport=require('passport');
const { route } = require('.');

const userController=require('../controllers/login_signup_controller');

//here it will take to the login, signup, forgot page
router.get('/signup',userController.signup);
router.get('/login',userController.login);


router.get('/profile',passport.checkAuthentication,userController.profile);

router.get('/admin',userController.showadminLogin);

router.get('/sign-out',userController.destroySession);
router.get('/sign-out1',userController.destroySession1);

router.post('/update/:id',passport.checkAuthentication,userController.update);

router.post('/update1/:id',userController.update1);

router.get('/admin-panel',userController.renderPanel);

router.post('/create-session',userController.createSession1);

router.get('/delete/:id',userController.delete);

router.get("/updatepage/:id",passport.checkAuthentication,userController.renderupdate);
router.get("/adminUpdate/:id",userController.renderupdate1);
//router for the google aauthentication
router.get('/auth/google', passport.authenticate('google', {scope: ['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google', {failureRedirect: '/user/login'}),userController.createSession);

module.exports=router;