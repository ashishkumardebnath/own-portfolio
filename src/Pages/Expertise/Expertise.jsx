import Lottie from "lottie-react";
import expertiseImg from "../../assets/animations/expertiseImg.json";
import { useEffect, useState } from "react";
import { Tooltip } from "keep-react";
const Expertise = () => {
  const [expertises, setExpertises] = useState([]);
  useEffect(() => {
    fetch("expertise2.json")
      .then((res) => res.json())
      .then((data) => setExpertises(data));
  }, []);
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
            {expertises.map((item) => (
              <Tooltip
                key={item._id}
                content={`${item.name}`}
                trigger="hover"
                placement="top"
                animation="duration-300"
                style="dark"
              >
                <div className="tooltip tooltip-primary border bg-white lg:w-28 lg:h-28 p-4  flex justify-center items-center">
                  <img
                    className="lg:w-24 md:w-24 w-14"
                    src={item.image}
                    alt=""
                  />
                </div>
              </Tooltip>
            ))}
          </div>
          <div className="lg:mt-[-100px] mt-8">
            <Lottie animationData={expertiseImg}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
