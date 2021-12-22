const express = require('express');
const app = express();
const router = require('./router');
const cookieParser = require('cookie-parser');


app.use(cookieParser()) ; 
app.use(express.json());
//use router for routing
app.use(router);


app.listen(5000 ,()=>{
    console.log("listning at port");
})    