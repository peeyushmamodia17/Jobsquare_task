const User=require('../models/user_schema');

//it render the home page 
module.exports.home= async function(req,res){

   
    try{
        
        let users =await User.find({});
       
        return res.render('Home',{
            title:'Home Page'
        });
    }catch(err){
        console.log('error',err);
        return;
    }

   
}
