import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Expertise from "../Expertise/Expertise";
import Services from "../Services/Services";
import SimpleDiv from "../SimpleDiv/SimpleDiv";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="lg:mx-12 mx-4">
      <About></About>
      <Testimonial></Testimonial>
      <SimpleDiv></SimpleDiv>
      <Expertise></Expertise>
      <Services></Services>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
};

export default Home;
