
const User=require('../models/user_schema');
const Admin=require('../models/admin_schema');

//It will take to the signup page
module.exports.signup=function(req,res){
    if(req.isAuthenticated()){
        req.flash('success','You are already loggedin');
        return res.redirect('/users/profile');
    }
    return res.render('signup',{
        title:'Signup Page'
    })

   
}



//it will redirect to login page
module.exports.login=function(req,res){
    if(req.isAuthenticated()){
        req.flash('success','You are already loggedin');
        return res.redirect('/users/profile');
    }
    return res.render('login',{
        title: 'Login Page'
    });
}


//it will redirect to profile page and render user
module.exports.profile=function(req,res){
        return res.render('profile',{
            title: 'Profile Page'
        });
    
}

//It will render the userupdate page for user
module.exports.renderupdate=function(req,res){
    console.log(req.params.id);
    return res.render("update",{
        title:'update page',
        id:req.params.id
    });
}

//render the userupdate page for admin
module.exports.renderupdate1=function(req,res){
    console.log(req.params.id);
    return res.render("adminUpdate",{
        title:'update page',
        id:req.params.id
    });
}

//update the user
module.exports.update=async function(req,res){
    try{
        console.log(req.params.id);
        console.log(req.body);
        let user=await User.findByIdAndUpdate(req.params.id,{
            city:req.body.city,
            role:req.body.role
        });
    
        if(user){
            req.flash('success',' User Updated successfully');
            return res.redirect("/users/profile");
            // return res.render("profile",{
            //     title:"profile page",
            //     user:user
            // })

        }
    }catch(err){
        console.log(err);
    }
   
}

//admin update the user
module.exports.update1=async function(req,res){
    try{
        console.log(req.params.id);
        console.log(req.body);
        let user=await User.findByIdAndUpdate(req.params.id,{
            city:req.body.city,
            role:req.body.role
        });
    
        if(user){
            req.flash('success',' User Updated successfully');
            return res.redirect("/users/admin-panel");
            // return res.render("profile",{
            //     title:"profile page",
            //     user:user
            // })

        }
    }catch(err){
        console.log(err);
    }
   
}

//it will logout the user
module.exports.destroySession=function(req,res){
    req.logout();
    req.flash('success','Logged out successfully');
    return res.redirect('/');
}

//logout the admin
module.exports.destroySession1=function(req,res){
    req.session.user='';
    req.flash('success','Logged out successfully');
    return res.redirect('/');
}


//it is for createsession and login user using passport-local
module.exports.createSession=function(req,res){
    req.flash('success','Logged in successfully');
    return res.redirect('/');
}

//it is for createsession and login user using passport-local
module.exports.createSession1=function(req,res){
    Admin.find({email:req.body.email,password:req.body.password},function(err,admin){
        if(admin){
            req.flash('success','Logged in successfully');
            console.log(admin);
            req.session.user=admin[0].email;
            console.log(req.session.user);
            return res.redirect("/users/admin-panel");
        }
        console.log(err);
    })
}

//render admin login page
module.exports.showadminLogin=function(req,res){
    
    return res.render("admin",{
        title:"Admin Login"
    });
}

//render admin panel with all users
module.exports.renderPanel=async function(req,res){
    try{
        let users=await User.find();
        if(req.session.user){
            return res.render("panel",{
                title:"Admin panel",
                users:users
            })
        }else{
            return res.redirect("/users/admin");
        }
    }catch(err){
            console.log(err);
    }
    
}

//admin perform delete on task
module.exports.delete=async function(req,res){
    try{
        let user=await User.findByIdAndDelete(req.params.id);
        if(user){
            req.flash('success','Deleted successfully');
            return res.redirect('/users/admin-panel')
        }
        req.flash('success','Error in delete successfully');
    }catch(err){
        console.log(err);
    }
    
}