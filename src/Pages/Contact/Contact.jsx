import "boxicons";
import contactImg from "../../assets/animations/contact.json";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { TextInput, Textarea } from "keep-react";
import Swal from "sweetalert2";
// import cover from '../../assets/images/cover3.jpg'
// bg-gradient-to-b from-slate-50 to-cyan-100
const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_CNT_SERVICES_ID}`,
        `${import.meta.env.VITE_CNT_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_CNT_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Contact Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="grid lg:grid-cols-2  bg-gradient-to-b from-slate-50 to-slate-50 py-6 px-4 mb-12 shadow-lg">
      <div className="flex justify-center items-center mb-8">
        <Lottie animationData={contactImg}></Lottie>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <p>
            --------{" "}
            <button className="bg-pink-200 mb-10 py-1 px-3 rounded-md text-red-600">
              Contact Me
            </button>{" "}
          </p>
          <h1 className="text-4xl font-semibold bannerFont1 mb-5">
            Feel free to drop me a line
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-full -mb-3">
              <p className="mb-1 ml-1">
                Name<span className="text-[#fc3a40]">*</span>
              </p>
              <TextInput
                name="user_name"
                placeholder="Name"
                color="gray"
                required
              />
            </div>
            <br />
            <div className="w-full -mb-3">
              <p className="mb-1 ml-1 ">
                Email<span className="text-[#fc3a40]">*</span>
              </p>
              <TextInput
                type="email"
                name="user_email"
                placeholder="Email"
                color="gray"
                required
              />
            </div>
            <br />
            <div className=" w-full mb-4">
              <p className="mb-1 ml-1">
                Message<span className="text-[#fc3a40]">*</span>
              </p>
              <Textarea
                id="comment"
                name="message"
                placeholder="Leave a message..."
                withBg={true}
                color="white"
                border={true}
                rows={4}
                required
              />
            </div>
            <input
              className="  bg-red-500 text-white hover:bg-teal-700 rounded-md  text-xl font-semibold py-2 w-full"
              type="submit"
              value="Submit"
            />
            <p className=" font-semibold text-teal-700 text-center">
              {done && "Thanks for contacting me!!!"}
            </p>
            <div className="mt-4">
              <p className="flex justify-center items-center ">
                <box-icon color="red" type="solid" name="phone"></box-icon>{" "}
                +8801885332092
              </p>
              <p className="flex justify-center items-center ">
                <box-icon color="red" name="envelope"></box-icon>
                blueboyashish2020@gmail.com
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
