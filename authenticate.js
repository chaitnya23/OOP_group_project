
const jwt = require('jsonwebtoken');
const User = require('../database/userSchema');


const Authenticate = async (req ,res ,next)=>{

    try {
        
        const token = req.cookies.jwtoken;
       // console.log(`cookie is : ${token}`);
        const verifyToken = jwt.verify(token ,"mynameischaitnyagiriamawebdevloper");


        const rootUser = await User.findOne({_id:verifyToken._id }); 
        //console.log(`user is ${rootUser}`);
        //creting extra requests fields
        if(!rootUser){ 
            throw new Error("authentication problem .....");
        }
        req.rootUser = rootUser;
       // req.token = token;

        next();


    } catch (error) {
        console.log(error.message);
        res.status(401).send("error to authenticate...");
    }
}

module.exports = Authenticate;