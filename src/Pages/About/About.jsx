import { TypeAnimation } from "react-type-animation";
import "boxicons";
import image from "../../assets/image/ashish10.png";
import "./About.css";
import { FaTelegramPlane } from "react-icons/fa";
const About = () => {
  return (
    <div className="lg:grid grid-cols-2  justify-center items-center ">
      <div className=" py-16 items-start">
        <h1>
          --------{" "}
          <button className="bg-pink-200 py-1 px-3 rounded-md text-red-600">
            About Me
          </button>{" "}
        </h1>
        <h1
          className="bannerFont mt-2"
          style={{ fontSize: "3rem", fontWeight: "700" }}
        >
          Hey,
        </h1>
        <h1
          className="bannerFont"
          style={{ fontSize: "3rem", fontWeight: "700" }}
        >
          I am{" "}
          <TypeAnimation
            sequence={["Ashish", 1000]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block", color: "teal" }}
            repeat={Infinity}
          />
        </h1>

        <p className="bannerFont1 mt-4 mb-2 text-2xl">
          Frontend Developer with high <br /> level of experience
        </p>
        <p className="bannerFont1 text-xl text-gray-500">
          I love to visualize ideas and make them come alive on a website. If
          you looking for a Developer to build your Brand And Grow Your
          Business? Let’s shake hands with Ashish Kumar.
        </p>

        <div className="mt-7">
          {/* <button className="btn btn-outline rounded-md btn-success mr-2 font-extraBold">Hire Me</button> */}
          <button className="bg-[#fc3a40] flex gap-2 items-center text-white px-4 py-2  duration-300 rounded hover:bg-teal-700 ">
            <FaTelegramPlane className="text-lg"></FaTelegramPlane> Hire me
          </button>
        </div>
      </div>
      <div>
        <img className="w-full" src={image} />
      </div>
    </div>
  );
};

export default About;
