import { Navbar } from "keep-react";
import logo from "../../../assets/logo1.png";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaTelegramPlane } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="shadow-lg">
      <Navbar fluid={true} className="max-w-screen-xl mx-auto">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Brand>
            <a href="">
              <img src={logo} alt="logo" className="lg:w-60 md:w-48 w-40" />
            </a>
          </Navbar.Brand>

          <Navbar.Container className="flex items-center gap-6">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-4"
            >
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/"
                    className="text-black text-lg font-medium px-3 py-1"
                  >
                    Home
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/works"
                    className="text-black text-lg font-medium px-3 py-1"
                  >
                    Review
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/services"
                    className="text-black text-lg font-medium px-3 py-1"
                  >
                    Services
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/skills"
                    className="text-black text-lg font-medium px-3 py-1"
                  >
                    Skills
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/contact"
                    className="text-black text-lg font-medium px-3 py-1 "
                  >
                    Contact
                  </NavLink>
                }
              />
              <Navbar.Link
                linkName={
                  <a
                    href="https://www.fiverr.com/dnashish"
                    target="blank"
                  >
                    <button className="bg-[#fc3a40] flex gap-2 items-center text-white px-4 py-2 lg:ml-44 duration-300 rounded hover:bg-teal-700 ">
                      <FaTelegramPlane className="text-lg"></FaTelegramPlane>{" "}
                      Hire me
                    </button>
                  </a>
                }
              />
            </Navbar.Container>
            <Navbar.Container className="flex gap-1">
              <Navbar.Toggle className="block" />
            </Navbar.Container>
          </Navbar.Container>
          <Navbar.Collapse
            collapseType="sidebar"
            className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
          >
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link
                linkName={
                  <Link to="/" className="text-black ">
                    Home
                  </Link>
                }
              />
              <Navbar.Link
                linkName={
                  <Link to="/work" className="text-black ">
                    Works
                  </Link>
                }
              />
              <Navbar.Link
                linkName={
                  <Link to="/services" className="text-black ">
                    Services
                  </Link>
                }
              />
              <Navbar.Link
                linkName={
                  <Link to="/skills" className="text-black ">
                    Skills
                  </Link>
                }
              />
              <Navbar.Link
                linkName={
                  <Link to="/contact" className="text-black ">
                    Contact
                  </Link>
                }
              />
              <Navbar.Link
                linkName={
                  <a
                    href="https://www.fiverr.com/pro_developer25"
                    target="blank"
                  >
                    <button className="bg-[#fc3a40] flex gap-2 items-center text-white px-1 py-1 duration-300 rounded hover:bg-[#14a800] ">
                      <FaTelegramPlane></FaTelegramPlane> Hire me
                    </button>
                  </a>
                }
              />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
