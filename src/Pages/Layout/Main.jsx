import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
