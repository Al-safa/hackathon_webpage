import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import About from "../components/about";
import Footer from "../footer/footer"
import Navbar from "../components/Navbar"


function Home () {
    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Timeline/>
            <Footer/>
            
        </>
    );

}

export default Home;