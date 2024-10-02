import { useRef } from "react";
import Heading from "./Heading";
import Section from "./Section";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();
    
  const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current);
    emailjs
      .sendForm("service_m2bb2xg", "template_iqp23t5", form.current, {
        publicKey: "3WtCVmYtUjAWO49ut",
      })
      .then(() => console.log("email sent successfully."))
      .catch((err) => console.log("Error Occured - ", err));
  };
  return (
    <Section id="features" crosses className="mt-10">
      <div className="container relative z-2">
        <Heading
          title="get in touch"
          className="text-center capitalize md:max-w-md lg:max-w-2xl"
        />
        <p className="-mt-15 flex justify-center">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>

        <form ref={form}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              maxLength={25}
              minLength={2}
              placeholder="your name"
              className="m-2 rounded-lg border-none bg-white p-2 text-xl text-violet-700"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your email"
              className="m-2 rounded-lg border-none bg-white p-2 text-xl text-violet-700"
            />
          </div>
          <div>
            <label htmlFor="msg"></label>
            <textarea
              name="message"
              id="msg"
              className="m-2 ml-14 resize-none rounded-lg border-none bg-white p-2 text-xl text-violet-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="ml-14 rounded-lg bg-white p-2 text-xl text-black"
            onClick={sendEmail}
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
export default ContactForm;
