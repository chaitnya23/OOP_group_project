const express = require('express');
const router = express.Router();
const User = require('./database/userSchema');
const Alumini = require('./database/aluminiSchma');
const jwt = require('jsonwebtoken');
const authenticate = require('./middlewares/authenticate');

require('./database/connection');


//costum middlewares


//GET requests
router.get('/' ,(req ,res)=>{
 
    res.send("welcome its a home page");
})

router.get('/aboutuser' ,authenticate ,(req ,res)=>{

        res.send(req.rootUser); 
})

router.get('/home' ,authenticate ,(req ,res)=>{

    res.send(req.rootUser);
})
 

router.get('/logoutuser'  ,async(req ,res)=>{

    try {
        res.clearCookie("jwtoken" ,{path:'/'});
        res.send("hi from logout")
    } catch (error) {
        console.log(error);
        res.send("there is problem in logout action")
    }
}) 

router.get('/getposts' ,async(req ,res)=>{

    try {
        const alumanies = await Alumini.find({});
        //console.log(alumanies);
        res.send(alumanies)
        
    } catch (error) {
        res.send("error in get")

        console.log(error);
    }
})




//POST requests  
router.post('/register' ,async (req ,res)=>{

    const {name ,email ,phone ,password ,proffession} = req.body;
    if(!name || !email || !phone || !password || !proffession){
        return res.status(404).json({message:"error fill every filled properly.."});
    }
    try{

        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({message:"error user already exists"});
        }

        const newUser = await new User({
            name:name,
            email:email,
            phone:phone,
            password:password,
            proffession: proffession
        });

        const user = await newUser.save();
        if(user){
            res.send("registered successfully") 
        }

    }catch(e){
        res.status(422).send("error in details");
    }

})

router.post('/signin' ,async (req ,res)=>{

    let token;
    const {email ,password} = req.body;

    if(!email || !password){
        return res.status(422).json({message:"error!!!! fill all the fields"});
    }
 
    try{

        const user = await User.findOne({email:email}); 
        //console.log(user);

        if(user && user.password===password){

           // token = await jwt.sign({_id:user._id} ,"mynameischaitnyagiriamawebdevloper");
           
            token = await user.generateToken();
            console.log("token" ,token);
            res.cookie("jwtoken" ,token ,{
                httpOnly:true
            })
            res.status(200).send("logged in succesfully..");
        }
        else{
            res.status(422).send("error user dose not exits..");

        } 
 
 
    }catch(e){
        console.log(e.message);
        res.status(422).send("error!!! ")
    }
    



})

router.post('/aluminisignup' ,async (req ,res)=>{
    try {
        const {name ,email ,company ,placed_as ,package } = req.body;
        const newAlumini = await new Alumini({
            name ,email ,company ,placed_as ,package
        })
        
       const alumini = await newAlumini.save();
       if(alumini){
           res.send("registered successfully")
       }
    } catch (error) {
        res.status(404).send({message:"error in registering"})
    }
})

//router.post('/post' ,async(req ,res)=>{
//
  ///  const {name ,post} = req.body;


  //  if(!name || !post){
  //      return res.status(422).json({message:"error!!!! fill all the fields"});
 //   }

  //  try {
        
       
   //     await Alumini.updateOne({name:name} ,{$push:{posts:post}});

   // } catch (error) {
   //     console.log(error ,"post error");
   //     res.send('error in loading posts')
  //  }
//})

router.post('/addpost' ,async(req ,res)=>{

    const {email ,content} = req.body;
    if(!email || !content){
        return res.status(422).json({message:"error!!!! fill all the fields"});
    }
    try {
        const aluminiExist = await Alumini.findOne({email:email});
        if(aluminiExist){
         await Alumini.updateOne({email:email} ,{$push:{posts:content}});
         res.send('posted successfully...');

        } 
        else{
            res.status(404).send('something went wrong...');
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;
