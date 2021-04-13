require('mongoose').config()
const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
       await mongoose.connect(process.env.Mongo_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
       });
       console.log("mongodb connection successfull") 
    }catch(error){
        console.log("mongodb connection successfull")
        process.exit(1)
    }
}
module.export=connectDB

