const mongoose=require('mongoose');

//its a admin schema
const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
   
},
    {
        timestamps: true
    }
);

const admin=mongoose.model('admin',adminSchema);


module.exports=admin;