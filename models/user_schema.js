const mongoose=require('mongoose');

//its a user schema
const userSchema=new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    city:{
        type:String,
    },
    profileurl:{
        type:String,
        required:true
    },
    role:{
        type:String
    }
   
},
    {
        timestamps: true
    }
);

const user=mongoose.model('user',userSchema);


module.exports=user;