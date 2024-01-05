import { useState } from "react";
import "./Experience.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Experience = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className=" lg:grid grid-cols-2 mt-36 lg:p-10 p-4 shadow-2xl lg:h-64 h-[400px]  rounded-lg mb-28 ">
      <div className="mb-10 ">
        <p>
          --------{" "}
          <button className="bg-pink-200 mb-10 py-1 px-3 rounded-md text-red-600">
            Statistics
          </button>{" "}
        </p>
        <h2 className="lg:text-4xl text-2xl bannerFont1 font-semibold">
          Short Overview on our{" "}
        </h2>
        <h2 className="lg:text-4xl text-2xl bannerFont1 font-semibold text-teal-700">
          Experience
        </h2>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex justify-center items-center">
          <div
            className="experience lg:text-2xl bannerFont1  text-teal-700"
            id="Experience"
          >
            <div className="achievement">
              <div className="circle">
                {counterOn && (
                  <CountUp start={0} end={50} duration={2} delay={0} />
                )}
                +
              </div>
              <span>Happy</span>
              <span>Clients</span>
            </div>
            <div className="achievement">
              <div className="circle">
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </div>
              <span>Completed</span>
              <span>Projects</span>
            </div>
            <div className="achievement">
              <div className="circle">
                {counterOn && (
                  <CountUp start={0} end={1} duration={2} delay={0} />
                )}
                +
              </div>
              <span>Years</span>
              <span>Experience</span>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Experience;
