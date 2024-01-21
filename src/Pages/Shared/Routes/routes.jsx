import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
// import Contact from "../../Contact/Contact";
// import Services from "../../Services/Services";
import Home from "../../Home/Home";
// import Expertise from "../../Expertise/Expertise";
import NotFound from "../../Layout/NotFound";
import ContactRoutes from "../../RoutePages/ContactRoutes";
import SkillRoutes from "../../RoutePages/SkillRoutes";
import ServiceRoute from "../../RoutePages/ServiceRoute";

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
        element: <ServiceRoute></ServiceRoute>,
      },
      {
        path: "/skills",
        element: <SkillRoutes></SkillRoutes>,
      },
      {
        path: "/contact",
        element: <ContactRoutes></ContactRoutes>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
