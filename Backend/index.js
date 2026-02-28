const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors")
const JobsUpdated = require("./routes/JobsUpdated");
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use("/jobs",JobsUpdated);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("sorted")
    app.listen(process.env.PORT,()=>{
        console.log("running");
    })
}).catch((error)=>{
    console.log(error.message);
})