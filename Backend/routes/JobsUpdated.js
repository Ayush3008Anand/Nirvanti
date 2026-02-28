const express=require("express")
const JobsUpdated=express.Router();
const JobsUpdate=require("../models/JobsUpdated");
JobsUpdated.post("/create",async(req,res)=>{
    try{
        const {numberrms,terrace,parking,fencing,fencingtype,lift,floorareas,ffplanning,nobathroom,nokitchen,drainage,water,budget}=req.body;
        const x1=new JobsUpdate({numberrms,terrace,parking,fencing,fencingtype,lift,floorareas,ffplanning,nobathroom,nokitchen,drainage,water,budget})
        const x2=await x1.save();
        console.log("done");
    }
    catch(error){
        console.log(error.message);
    }
})
module.exports=JobsUpdated