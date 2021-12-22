const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    proffession:{
        type:String
    },
    tokens:[
     {  
        token:{
            type:String
        }
    }
    ]
 
} ,{timestamps:true});

//for using the methods on each document when it is formed or returned

dataSchema.methods.generateToken = async function(){

    try{

        let token = await jwt.sign({_id:this._id} ,"mynameischaitnyagiriamawebdevloper");
        await this.save();
        return token;


    }catch(e){
        console.log(e.message);
    }
}

const User = mongoose.model('user' ,dataSchema);


module.exports = User;