import { Helmet } from "react-helmet-async";
import Services from "../Services/Services";

const ServiceRoute = () => {
  return (
    <>
      <Helmet>
        <title>Service - Ashish Kumar</title>
      </Helmet>
      <Services></Services>
    </>
  );
};

export default ServiceRoute;
