import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Heading from "../components/Heading";
import Button from "../components/ux/Button";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const MAX_CHARS = 500;

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!name || name.length < 3) {
      return toast.error("Please enter your full name");
    }
    if (!email || !emailRegex.test(email)) {
      return toast.error("Please enter a valid email");
    }
    if (!number) {
      return toast.error("Please enter your phone number");
    }
    if (!message) {
      return toast.error("Please write a message");
    }

    setLoading(true);

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_USER_ID,
        template_params: {
          from_name: name,
          from_email: email,
          from_num: number,
          message,
          to_name: "Saqib",
        },
      });

      toast.success("Message sent successfully 🚀");
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <Toaster
        toastOptions={{
          style: {
            background: "#15131D",
            color: "#CAC6DD",
          },
        }}
      />

      <div className="container mx-auto px-6">
        {/* heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Heading title="Get in touch" className="capitalize" />
          <p className="mt-4 text-n-2">
            Have a project in mind or just want to say hi? I’m always open to
            new ideas and collaborations.
          </p>
        </div>

        {/* form */}
        <form
          onSubmit={sendEmail}
          className="relative mx-auto max-w-xl space-y-5 rounded-2xl border border-n-7 bg-n-8/70 p-8 backdrop-blur"
        >
          {/* ambient glow */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl" />

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-n-7 bg-n-7 px-4 py-3 text-n-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-n-7 bg-n-7 px-4 py-3 text-n-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />

          <input
            type="tel"
            placeholder="Phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full rounded-md border border-n-7 bg-n-7 px-4 py-3 text-n-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <div className="relative w-full">
            <textarea
              rows={6}
              placeholder="Your message"
              value={message}
              onChange={(e) => {
                {
                  const value = e.target.value;
                  if (value.length <= MAX_CHARS) {
                    setMessage(value);
                  }
                }
              }}
              className="w-full resize-none rounded-md border border-n-7 bg-n-7 px-4 py-3 text-n-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <div className="pointer-events-none absolute right-3 top-2 text-xs text-n-4">
              {message.length}/{MAX_CHARS}
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center py-3 font-medium text-white transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
