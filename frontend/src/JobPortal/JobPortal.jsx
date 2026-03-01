import { useEffect, useState } from "react"
import styles from "./JobPortal.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const JobPortal=()=>{
    const [jobs,setjobs]=useState([]);
    useEffect(()=>{
        const fetchjobs=async()=>{
        const res=await axios.get("https://nirvanti-backend.onrender.com/jobs/fetch");
        setjobs(res.data);
        };
        fetchjobs();
    },[]);
    const navigate=useNavigate();
    return(
        <div className={`${styles.bg}`}>
            <center><h1 className={`${styles.h1}`}>Jobs for You</h1></center>
            <div>
            {
                jobs.map((x)=>{
                    return(
                        <div className={`${styles.card}`}>
                            <div className={`${styles.div1}`}>
                            <div><h1>{x.locality}</h1></div>
                            <div>{x.district}</div>
                            <div>{x.numberrms+x.nobathroom+x.nokitchen} BHK house, with a budget of {x.budget}</div>
                            </div>
                            <div className={`${styles.div2}`}>
                            <button className={`${styles.applbutton}`} onClick={()=>{
                                navigate("/job/detail",{state:x})
                            }}>Apply</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default JobPortal