import { useState } from "react"
import styles from "./Faq.module.css"
const Faq=()=>{
    const [ans1,setans1]=useState(false);
    const [ans2,setans2]=useState(false);
    const [ans3,setans3]=useState(false);
    const [ans4,setans4]=useState(false);
    return(
        <div className={`${styles.faq}`}>
            <div><h1><center>FAQ's</center></h1></div>
            <div className={`${styles.section}`}>
            <div className={`${styles.question}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, laudantium?<span onClick={()=>{
                setans1(!ans1)
            }}>+</span></div>
            {ans1&&<div className={`${styles.answer}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum omnis consectetur voluptas quo doloremque, ea quibusdam magnam tenetur minima molestiae sed quasi culpa suscipit porro tempore. Quos porro ratione odit?</div>}
            </div>

            <div className={`${styles.section}`}>
            <div className={`${styles.question}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, laudantium?<span onClick={()=>{
                setans2(!ans2)
            }}>+</span></div>
            {ans2&&<div className={`${styles.answer}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum omnis consectetur voluptas quo doloremque, ea quibusdam magnam tenetur minima molestiae sed quasi culpa suscipit porro tempore. Quos porro ratione odit?</div>}
            </div>
            <div className={`${styles.section}`}>
            <div className={`${styles.question}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, laudantium?<span onClick={()=>{
                setans3(!ans3)
            }}>+</span></div>
            {ans3&&<div className={`${styles.answer}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum omnis consectetur voluptas quo doloremque, ea quibusdam magnam tenetur minima molestiae sed quasi culpa suscipit porro tempore. Quos porro ratione odit?</div>}
            </div>
            <div className={`${styles.section}`}>
            <div className={`${styles.question}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, laudantium?<span onClick={()=>{
                setans4(!ans4)
            }}>+</span></div>
            {ans4&&<div className={`${styles.answer}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum omnis consectetur voluptas quo doloremque, ea quibusdam magnam tenetur minima molestiae sed quasi culpa suscipit porro tempore. Quos porro ratione odit?</div>}
            </div>
        </div>
    )
}
export default Faq