import { useState } from "react"
import styles from "./Client.module.css"
const Client=()=>{
    const [signedup, setsignedup]=useState(true);
            return(
                <div className={`${styles.div}`}>
                    {signedup&&<form className={`${styles.form}`}>
                        <h1> Client</h1>
                        <input type="text" placeholder="Enter your email id"></input>
                        <input type="password" placeholder="Enter your password"></input>
                        <button className={`${styles.button}`}>submit</button>
                        <div>
                        don't have an account ? <span onClick={()=>{
                            setsignedup(!signedup);
                        }}>Signup</span>
                        </div>
                    </form>}
                    
                    {!signedup&&<form className={`${styles.form}`}>
                        <h1> Client</h1>
                        <input type="text" placeholder="Enter your Name"></input>
                        <input type="number" placeholder="Enter your contact number"></input>
                        <input type="text" placeholder="Enter your email id"></input>
                        <input type="password" placeholder="Enter your password"></input>
                        <button className={`${styles.button}`}>submit</button>
                        <div>
                        already have an account ? <span onClick={()=>{
                            setsignedup(!signedup);
                        }}>Login</span>
                        </div>
                    </form>}
                </div>
            )
}
export default Client