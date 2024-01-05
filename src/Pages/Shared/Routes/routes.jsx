import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../../Contact/Contact";
import Services from "../../Services/Services";
import Home from "../../Home/Home";
import Expertise from "../../Expertise/Expertise";
import Testimonial from "../../Testimonial/Testimonial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/works",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/skills",
        element: <Expertise></Expertise>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
