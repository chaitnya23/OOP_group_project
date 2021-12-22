const mongoose = require('mongoose');
const connection = mongoose.connection;

//database connection
const uri = "mongodb+srv://chaitnya_giri:chaitnya2306@mycluster.osnnc.mongodb.net/database1?retryWrites=true&w=majority"

mongoose.connect(uri ,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
});
connection.once("open" ,()=>{
    console.log("connected db succesfully");
});