import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Expertise from "../Expertise/Expertise";
import Services from "../Services/Services";
import SimpleDiv from "../SimpleDiv/SimpleDiv";
import Testimonial from "../Testimonial/Testimonial";
// className="lg:mx-12 mx-4"
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Ashish Kumar</title>
      </Helmet>
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
