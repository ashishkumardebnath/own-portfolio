import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./Testimonial.css";
import Aos from "aos";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="my-12 mx-4">
        <h2 className=" bannerFont1 lg:text-4xl text-2xl font-semibold text-center mb-5">
          My Client <span className="text-teal-700"> Feedback</span>
        </h2>
        <p className=" bannerFont1 text-xl text-gray-500 text-center">
          I evaluate your satisfaction more than money. My primary goal is
          client satisfaction.
        </p>
        <p className=" bannerFont1 text-xl text-gray-500 text-center">
          I strive to exceed expectations, deliver exceptional service, and
          build lasting
        </p>
        <p className=" bannerFont1 text-xl text-gray-500 text-center">
          relationships by putting your needs and happiness at the forefront
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          centeredSlides={false}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
          }}
          modules={[Keyboard, Scrollbar, Navigation]}
          className="mySwiper gap-4"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex  bg-teal-600 p-7 rounded-tl-3xl	rounded-br-3xl rounded-bl-3xl">
                <img
                  className="rounded rounded-tl-3xl	rounded-br-3xl rounded-bl-3xl border-4 border-blue-700 mr-3"
                  src={review.image}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="text-left">
                  <div className="mb-3">
                    <h4 className="text-xl text-white font-semibold">
                      {review.name}
                    </h4>
                    <small className=" text-orange-400 font-semibold">
                      {review.country}
                    </small>{" "}
                    <br />
                  </div>
                  <small className=" text-gray-300 font-semibold ">
                    {review.details.slice(0, 120)}
                    <a className="text-red-400" href="">
                      ...Show Details
                    </a>{" "}
                  </small>{" "}
                  <br />
                  <Rating
                    className="mt-2"
                    style={{ maxWidth: 130 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
