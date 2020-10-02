const express=require('express');

const router = express.Router();

const homeController=require('../controllers/home_controller');

//render home page
router.get('/',homeController.home);
router.use('/users',require('./login_signup_routes'));

module.exports=router;