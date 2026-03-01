import { useState } from "react"
import axios from "axios"
import styles from "./JobPage.module.css"
const JobPage=()=>{
    const [numberrms,setnumberrms]=useState("");
    const [district,setdistrict]=useState("");
    const [locality,setlocality]=useState("");
    const [terrace,setterrace]=useState("");
    const [parking,setparking]=useState("");
    const [fencing,setfencing]=useState("");
    const [fencingtype,setfencingtype]=useState("");
    const [lift,setlift]=useState("");
    const [numfloor,setnumfloor]=useState();
    const [floorareas,setfloorareas]=useState([]);
    const [ffplanning,setffplanning]=useState("");
    const [nobathroom,setnobathroom]=useState("");
    const [nokitchen,setnokitchen]=useState("");
    const [drainage,setdrainage]=useState("");
    const [water,setwater]=useState("");
    const [budget,setbudget]=useState("");
    const sent={district,locality,numberrms,terrace,parking,fencing,fencingtype,lift,floorareas,ffplanning,nobathroom,nokitchen,drainage,water,budget}
    return(
        <div className={`${styles.page}`}>
        <h1>Submit Project Details</h1>
        <form className={`${styles.form}`} onSubmit={async(e)=>{
            e.preventDefault();
            console.log(sent);
            const res=await axios.post("http://localhost:5000/jobs/create",sent);
            console.log("done");
        }}>
            <select required className={`${styles.select}`} value={district} onChange={(e)=>{setdistrict(e.target.value)}}>
                <option value="">District Name</option>
                <option value="Muzaffarpur">Muzaffarpur</option>
            </select>
            <input required className={`${styles.input}`} placeholder="Enter your locality" value={locality} onChange={(e)=>{
                setlocality(e.target.value);
            }}></input>
            <input required className={`${styles.input}`} placeholder="Enter number of rooms" value={numberrms} onChange={(e)=>{
                setnumberrms(e.target.value);
            }}></input>
            <input required className={`${styles.input}`} placeholder="Enter number of bathrooms" value={nobathroom} onChange={(e)=>{
                setnobathroom(e.target.value);
            }}></input>
            <input required className={`${styles.input}`} placeholder="Enter number of kitchens" value={nokitchen} onChange={(e)=>{
                setnokitchen(e.target.value);
            }}></input>
            <select required className={`${styles.select}`} value={terrace} onChange={(e)=>{setterrace(e.target.value)}}>
                <option value="">Want terrace?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <select required className={`${styles.select}`} value={parking} onChange={(e)=>{setparking(e.target.value)}}>
                <option value="">Want parking?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select><select required className={`${styles.select}`} value={fencing} onChange={(e)=>{setfencing(e.target.value)}}>
                <option value="">Want fencing?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select><select required className={`${styles.select}`} value={fencingtype} onChange={(e)=>{setfencingtype(e.target.value)}}>
                <option value="">what type of fencing you want?</option>
                <option value="brick+concrete">brick+concrete</option>
                <option value="wooden">wooden</option>
                <option value="metal">metal</option>
            </select>
            <select required className={`${styles.select}`} value={lift} onChange={(e)=>{setlift(e.target.value)}}>
                <option value="">Want lift?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <input required className={`${styles.input}`} placeholder="How many floors you are planning to build" value={numfloor} onChange={(e)=>{
                const value = Number(e.target.value);
                setnumfloor(value);
                setfloorareas(Array(numfloor).fill(""))
            }}></input>
            {
                floorareas.map((area,index)=>{
                    return(
                        <input className={`${styles.input}`} required placeholder={`Enter carpet area for floor ${index+1}`} value={area} onChange={(e)=>{
                            const list=[...floorareas];
                            list[index]=e.target.value;
                            setfloorareas(list);
                        }}></input>
                    )
                })
            }
            <select  className={`${styles.select}`} value={ffplanning} onChange={(e)=>{setffplanning(e.target.value)}} required>
                <option value="">planning to extend in future?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <select className={`${styles.select}`} value={drainage} onChange={(e)=>{setdrainage(e.target.value)}} required>
                <option className={`${styles.option}`} value="">Septic tank or drainage available</option>
                <option className={`${styles.option}`} value="Yes">Yes</option>
                <option className={`${styles.option}`} value="No">No</option>
            </select>
            <select required className={`${styles.select}`} value={water} onChange={(e)=>{setwater(e.target.value)}}>
                <option value="">Water Supply type?</option>
                <option value="borewell">borewell</option>
                <option value="supply">supply</option>
            </select>
            <input required className={`${styles.input}`} placeholder="Enter your budget" value={budget} onChange={(e)=>{
                setbudget(e.target.value);g
            }}></input>
            <button type="submit" className={`${styles.button}`}>submit</button>
        </form>
        </div>
    )
}
export default JobPage
