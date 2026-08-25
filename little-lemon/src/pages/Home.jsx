import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/AboutSnippet';

function Home() {
    return(
        <>
                <Hero/>
                <Specials/>
                <About />
                <Testimonials/>
        </>
    )
}

export default Home;