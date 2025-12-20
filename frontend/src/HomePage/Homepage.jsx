import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import WhyUs from "./WhyUs/WhyUs"
import HowWeWork from "./HowWeWork/HowWeWork"
import Faq from "./FREQ/Faq"
import Footer from "./Footer/Footer"
const Homepage=()=>{
    return(
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <WhyUs></WhyUs>
            <HowWeWork></HowWeWork>
            <Faq></Faq>
            <Footer></Footer>
        </>
    )
}
export default Homepage