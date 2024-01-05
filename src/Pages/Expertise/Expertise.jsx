import html from "../../assets/image/html.png";
import css from "../../assets/image/css4.jpeg";
import javaScript from "../../assets/image/javaScript.png";
import tailwind from "../../assets/image/tailwind1.png";
import mongodb from "../../assets/image/mongodb.png";
import node from "../../assets/image/node.png";
import react from "../../assets/image/react.png";
import bootstrap from "../../assets/image/bootsrap.png";
import Lottie from "lottie-react";
import expertiseImg from "../../assets/animations/expertise.json";
const Expertise = () => {
  return (
    <div className="mt-10  px-4 py-4  bg-emerald-50 lg:px-10 lg:py-16">
      <div>
        <p>
          --------{" "}
          <button className="bg-pink-200 mb-12 py-1 px-3 rounded-md text-red-600">
            Expertise
          </button>{" "}
        </p>
        <h1 className="bannerFont1 text-xl lg:text-4xl font-semibold mb-12">
          As a <span className="text-teal-700">Web Developer</span> I am good at{" "}
          <br className="lg" /> using:
        </h1>
        <div className="grid lg:grid-cols-2 gap-10 ">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:mb-6">
            <div
              className="tooltip tooltip-primary border bg-white lg:w-28 lg:h-28  p-4 flex justify-center items-center"
              data-tip="HTML"
            >
              <img style={{ height: "70px" }} src={html} alt="" />
            </div>
            <div
              className="tooltip tooltip-primary border bg-white lg:w-28 lg:h-28 p-4  flex justify-center items-center"
              data-tip="CSS"
            >
              <img style={{ height: "70px" }} src={css} alt="" />
            </div>
            <div
              className="tooltip tooltip-primary border bg-white  lg:w-28 lg:h-28 p-4   flex justify-center items-center"
              data-tip="Tailwind"
            >
              <img style={{ height: "70px" }} src={tailwind} alt="" />
            </div>
            <div
              className="tooltip tooltip-primary border bg-white lg:w-28 lg:h-28 p-4  flex justify-center items-center"
              data-tip="Bootstrap"
            >
              <img style={{ height: "70px" }} src={bootstrap} alt="" />
            </div>
            <div
              className="tooltip tooltip-primary border bg-white lg:w-28 lg:h-28 p-4  flex justify-center items-center"
              data-tip="React"
            >
              <img style={{ height: "70px" }} src={react} alt="" />
            </div>
            <div
              className="tooltip tooltip-primary border bg-white lg:w-28 lg:h-28 p-4  flex justify-center items-center"
              data-tip="Node"
            >
              <img style={{ height: "70px" }} src={node} alt="" />
            </div>
            <div
              className="tooltip tooltip-primary border bg-white lg:w-28 lg:h-28 p-4  flex justify-center items-center"
              data-tip="MongoDB"
            >
              <img style={{ height: "70px" }} src={mongodb} alt="" />
            </div>
            <div
              className="tooltip tooltip-primary border bg-white lg:w-28 lg:h-28 p-4  flex justify-center items-center"
              data-tip="JavaScript"
            >
              <img style={{ height: "70px" }} src={javaScript} alt="" />
            </div>
          </div>
          <div className="lg:mt-[-200px] mt-2">
            <Lottie animationData={expertiseImg}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
