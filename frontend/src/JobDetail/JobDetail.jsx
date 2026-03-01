import { useLocation } from "react-router-dom"
import styles from "./JobDetail.module.css"
const JobDetail=()=>{
    const location=useLocation();
    const job=location.state;
    return(
        <div className={`${styles.screen}`}>
            <div className={`${styles.upper}`}>
                <div>
                <div><h1>{job.locality}</h1></div>
                <div><h3>{job.district}</h3></div>
                <div><h3>{job.numberrms+job.nobathroom+job.nokitchen} BHK house, with a budget of {job.budget}</h3></div>
                </div>
            </div>
            <div className={`${styles.lower}`}>
                 <div className={`${styles.description}`}>
                    <div>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nihil ipsa obcaecati eos iste repellat doloribus repudiandae neque, officia praesentium sit! Veniam incidunt labore laborum odit! Quis maxime laboriosam perferendis sequi alias fuga iusto? Dignissimos reprehenderit distinctio ullam ut magnam laborum, magni tenetur doloremque commodi optio. Quis ipsum minima enim. Fuga a minus tenetur possimus, nulla tempora exercitationem voluptatum aperiam assumenda, error odio quo nostrum ducimus molestias sapiente quia, alias libero consequuntur dolor eum iste? Accusantium architecto beatae dolorum sit, iure debitis consequuntur nemo necessitatibus incidunt in explicabo quas. Expedita sed voluptas eveniet ab nihil rem placeat alias repellendus, consectetur delectus. Dolorum illo quidem quisquam saepe tempora ipsa.
                    </div>
                 </div>
                 <div className={`${styles.application}`}>
                    <div>
                    <textarea placeholder="Enter your pitch here"></textarea>
                    <button>Submit</button>
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default JobDetail