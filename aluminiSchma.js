const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');

const dataSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    company:{
        type:String
    },
    placed_as:String,
    package:{
        type:Number
    },
    posts:[
        {
           type:String 
        }
    ],
    

    
 
});

const Alumini = mongoose.model('alumini' ,dataSchema);


module.exports = Alumini;