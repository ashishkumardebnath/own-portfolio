import design from "../../assets/image/design.png";
import develop from "../../assets/image/develop2.png";
import service from "../../assets/animations/service.json";
import Lottie from "lottie-react";

const Services = () => {
  return (
    <div className="lg:grid grid-cols-2 flex flex-col-reverse lg:gap-0 gap-8  justify-center items-center lg:mx-12   lg:my-20 ">
      <div className="lg:w-[400px] lg:h-[350px] lg:px-0 ">
        <Lottie animationData={service}></Lottie>
      </div>
      <div className="mt-16">
        <h1>
          --------{" "}
          <button className="bg-pink-200 py-1 px-3 rounded-md text-red-600 mb-10">
            Services
          </button>{" "}
        </h1>
        <h2 className=" bannerFont1 text-2xl lg:text-4xl font-semibold text-gray-700 mb-6">
          I provide my clients with the following vaulable{" "}
          <span className="text-teal-700">services</span>
        </h2>
        <h6 className="text-xl text-gray-600">
          I always want to be able to meet the goals of my clients, i value my
          services as a designer through my work. you may like my services.
        </h6>
        <div className="lg:flex  lg:justify-between mt-4">
          <div className="flex items-center lg:mb-0 mb-4 gap-3 ">
            <img
              className="w-14 h-14 rounded-full border-4 border-teal-700 p-2"
              src={design}
              alt=""
            />
            <h5 className="text-xl font-semibold ">Web Design</h5>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 rounded-full border-4 border-teal-700 p-2"
              src={develop}
              alt=""
            />
            <h5 className="text-xl font-semibold">Web Development</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
