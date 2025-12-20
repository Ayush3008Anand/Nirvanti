import styles from "./Navbar.module.css"
const Navbar=()=>{
    return(
        <div className={`${styles.nav}`}>
            <div className={`${styles.brandname}`}> 
            <h1>Nirvanti</h1>
            </div>
            <div className={`${styles.links}`}>
                <div>Home</div>
                <div>Find Work</div>
                <div>Hire Talent</div>
            </div>
        </div>
    )
}
export default Navbar