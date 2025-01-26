import Section from "./Section";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import Heading from "./Heading";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const ids = {
    service: import.meta.env.VITE_SERVICE_ID,
    template: import.meta.env.VITE_TEMPLATE_ID,
    user: import.meta.env.VITE_USER_ID,
  };

  const data = {
    service_id: ids.service,
    template_id: ids.template,
    user_id: ids.user,
    template_params: {
      from_name: name,
      to_name: "Saqib",
      from_email: email,
      from_num: number,
      message: message,
    },
  };

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.length) {
      return toast.error("Enter Name");
    }
    if (name.length < 3) {
      return toast.error("Enter Fullname");
    }
    if (!email.length) {
      return toast.error("Enter Email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is not valid");
    }
    if (!number.length) {
      return toast.error("Enter Phone Number");
    }
    if (!message.length) {
      return toast.error("Enter your Message");
    }
    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then((res) => {
        toast.success("Sent Successfully");
        console.log("Success - ", res.data);
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      })
      .catch((err) => {
        // console.log("Failed - ", err);
        toast.error("Bad Request! Try Again");
      });
  };

  return (
    <>
      <Section
        id="features"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        className="-mt-[5.25rem] flex pt-[14rem]"
      >
        <div className="container my-12 grid">
          <Heading
            title="get in touch"
            className="h1 text-center capitalize md:max-w-md lg:max-w-2xl"
          />
          <div className="flex justify-center">
            <p className="-mt-15 w-1/2 text-center">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          <form className="container relative w-1/2 space-y-4 py-12 font-code text-base">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-n-7 bg-n-7 px-4 py-2 text-n-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-n-7 bg-n-7 px-4 py-2 text-n-2 focus:outline-none"
            />
            <div className="relative">
              <input
                type="tel"
                maxLength={14}
                placeholder="(+Country Code) Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full rounded-md border border-n-7 bg-n-7 px-4 py-2 text-n-2 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full resize-none rounded-md border border-n-7 bg-n-7 px-4 py-2 text-n-2 focus:outline-none"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-n-5 py-2 text-white transition hover:bg-n-6"
              onClick={sendEmail}
            >
              Send Message
            </button>

            <Toaster
              toastOptions={{
                style: {
                  backgroundColor: "#15131D",
                  color: "#CAC6DD",
                  fontStyle: "font-code",
                },
                success: {
                  iconTheme: {
                    primary: "#7ADB78",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#757185",
                  },
                },
              }}
            />
          </form>
        </div>
      </Section>
    </>
  );
};
export default ContactForm;
