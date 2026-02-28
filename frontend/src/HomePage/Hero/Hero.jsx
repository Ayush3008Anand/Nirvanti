import { useNavigate } from "react-router-dom"
import styles from "./Hero.module.css"
import IMG1 from "../../assets/IMG1.jpg"
import IMG2 from "../../assets/img2.jpg"
import { useEffect, useState } from "react"
const Hero=()=>{
    const images=[IMG1,IMG2];
    const [currentidx,setidx]=useState(0);
    useEffect(()=>{
        const intervalid=setInterval(() => {
        setidx((currentidx+1)%images.length);
    }, 3000);
    return ()=>clearInterval(intervalid);
    },[currentidx])
    const navigate=useNavigate();
    return(
        <div className={`${styles.Hero}`}>
            <div className={`${styles.text}`}>
                <h1>Build Your Dream</h1>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eum nulla commodi labore aliquid temporibus odio. Tempore blanditiis mollitia architecto ut consectetur quas omnis assumenda dolorem voluptates ab eligendi aperiam totam illo voluptatibus non rerum, vitae suscipit dolores atque ipsum repudiandae. Sit quibusdam reiciendis alias dolore magnam numquam ipsa rem odit voluptatum et. Excepturi architecto vero, illo quo tenetur ut, magnam ea reiciendis ipsam officia facere tempora animi, similique earum ex aut asperiores consequuntur repellat culpa adipisci minus! Rem vero eius ullam doloribus deserunt saepe eum. Quia facilis blanditiis obcaecati repellendus maiores dicta, nam repellat est deserunt tempore in, odit id iure doloremque quidem dolorum ducimus alias quasi?</div>
                <button className={`${styles.btn1}`} onClick={()=>{
                    navigate("/choice/client");
                }}>ergnrigte</button>
                <button className={`${styles.btn2}`} onClick={()=>{
                    navigate("/choice/engineer")
                }}>eseonjerg</button>
            </div>
            <div className={`${styles.imgpart}`}>
                <img className={`${styles.image}`} src={images[currentidx]}></img>
            </div> 
        </div>
    )
}
export default Hero