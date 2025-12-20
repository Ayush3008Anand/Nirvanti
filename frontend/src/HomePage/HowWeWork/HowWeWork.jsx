import styles from "./HowWeWork.module.css"
const HowWeWork=()=>{
    return(
        <div className={`${styles.HowWeWork}`}>
            <div className={`${styles.text}`}><h1>How <br></br>We Work?</h1></div>
            <div className={`${styles.text1}`}>
                <div  className={`${styles.numbers}`}><h1>1.</h1><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eligendi hic quam, accusamus dolorem dolores nemo cupiditate asperiores expedita inventore!</div></div>
                <div  className={`${styles.numbers}`}><h1>2.</h1><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eligendi hic quam, accusamus dolorem dolores nemo cupiditate asperiores expedita inventore!</div></div>
                <div  className={`${styles.numbers}`}><h1>3.</h1><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eligendi hic quam, accusamus dolorem dolores nemo cupiditate asperiores expedita inventore!</div></div>
                <div  className={`${styles.numbers}`}><h1>4.</h1><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eligendi hic quam, accusamus dolorem dolores nemo cupiditate asperiores expedita inventore!</div></div>
            </div>
        </div>
    )
}
export default HowWeWork