import { FaTelegramPlane } from "react-icons/fa";
import contactStImg from "../../assets/image/statisticsImg.png";
const SimpleDiv = () => {
  return (
    <div
      className=" grid lg:grid-cols-2 gap-4  bg-gradient-to-b from-neutral-50 to-slate-100 shadow  py-6  lg:p-16 p-4 lg:my-32 my-14"
      style={{
        backgroundImage: `url("${contactStImg}")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h3 className="lg:text-3xl text-xl font-semibold text-teal-700 mb-2">
          Have a project on your mind?
        </h3>
        <p>
          Feel free to discuss with me. I can build any niche belonging website
          for you. Need free consultation? Yes I can help you with that too with
          zoom/meet sessions.
        </p>
      </div>
      <div className=" flex lg:justify-end items-center">
        <button className="bg-[#fc3a40] flex gap-2 items-center text-white  py-2 font-semibold  duration-300 rounded hover:bg-teal-700 text-2xl px-6">
          <FaTelegramPlane></FaTelegramPlane> Hire me
        </button>
      </div>
    </div>
  );
};

export default SimpleDiv;
