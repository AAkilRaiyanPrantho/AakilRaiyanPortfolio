import Headings from "../../Shared/Headings/Headings";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div id="aboutMe" className="flex items-center justify-center my-4 lg:w-2/4 lg:mx-auto py-14"><Headings heading={'About Me'}></Headings></div>
            <AboutMe></AboutMe>
            <div id="projects" className="flex items-center justify-center my-4 lg:w-2/4 lg:mx-auto py-14"><Headings heading={'projects'}></Headings></div>
            <Projects></Projects>
            <div id="skills" className="flex items-center justify-center my-4 lg:w-2/4 lg:mx-auto py-14"><Headings heading={'skills/experience'}></Headings></div>
            <Skills></Skills>
            <div id="contacts" className="flex items-center justify-center my-4 lg:w-2/4 lg:mx-auto py-14"><Headings heading={'contact me'}></Headings></div>
            <Contact></Contact>
        </div>
    );
};

export default Home;