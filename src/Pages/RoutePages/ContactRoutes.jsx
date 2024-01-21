import { Helmet } from "react-helmet-async";
import Contact from "../Contact/Contact";

const ContactRoutes = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Ashish Kumar</title>
      </Helmet>
      <Contact></Contact>
    </>
  );
};

export default ContactRoutes;
