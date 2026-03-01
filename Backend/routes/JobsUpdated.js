const express=require("express")
const JobsUpdated=express.Router();
const JobsUpdate=require("../models/JobsUpdated");
JobsUpdated.post("/create",async(req,res)=>{
    try{
        const {district,locality,numberrms,terrace,parking,fencing,fencingtype,lift,floorareas,ffplanning,nobathroom,nokitchen,drainage,water,budget}=req.body;
        const x1=new JobsUpdate({district,locality,numberrms,terrace,parking,fencing,fencingtype,lift,floorareas,ffplanning,nobathroom,nokitchen,drainage,water,budget})
        const x2=await x1.save();
        console.log("done");
    }
    catch(error){
        console.log(error.message);
    }
})
JobsUpdated.get("/fetch",async(req,res)=>{
    try{
        const jobs=await JobsUpdate.find();
        console.log(jobs);
        res.json(jobs)
    }
    catch(error){
        console.log(error.message);
    }
})
module.exports=JobsUpdated