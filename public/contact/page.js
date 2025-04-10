"use client"
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import call from "../images/phone-call.png";
import open_mail from "../images/Asidebar/open-mail.png";
import Image from "next/image";

export default function page() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f1e465a-6898-4169-b57c-92103a1e3ade"); // Replace with your Web3Forms access key

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Thank you! Your message has been sent successfully.");
    } else {
      setResult("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 flex flex-col justify-center items-center h-screen max-lg:h-[100%] bg-gray-950 text-white"
    >
      <h1 className="w-full text-5xl font-extrabold mb-10 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">
        GET IN<p className="ml-2 text-yellow-400">TOUCH</p>
        <p className="absolute text-8xl max-md:text-6xl opacity-10">CONTACT</p>
      </h1>

      <div className="w-[75%] flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">DON'T BE SHY!</h2>
          <p className="max-w-md text-left">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image
              loading="lazy"
              src={open_mail}
              className="text-blue-500 text-2xl w-8"
              alt="Mail Icon"
            />
            <div>
              <p className="text-lg font-semibold">MAIL ME</p>
              <p className="text-sm">rajurao1106@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Image
              loading="lazy"
              src={call}
              className="text-blue-500 text-2xl w-8"
              alt="Call Icon"
            />
            <div>
              <p className="text-lg font-semibold">CALL ME</p>
              <p className="text-sm">+91 7470578448</p>
            </div>
          </div>
          <div className="flex gap-5 text-3xl mt-4">
            <a
              href="https://www.linkedin.com/in/raju-rao/"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a href="https://github.com/rajurao1106" aria-label="GitHub">
              <FaGithub className="hover:text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com/rajurao1107/"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100035409559017"
              aria-label="Facebook"
            >
              <FaFacebook className="hover:text-blue-500" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-auto max-md:items-center">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col lg:flex-row gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                aria-label="Your Name"
                className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 w-full lg:w-52"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                aria-label="Your Email"
                className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 w-full lg:w-52"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                required
                aria-label="Your Subject"
                className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 w-full lg:w-52"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              aria-label="Your Message"
              className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 w-full h-32 mt-4"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 w-full lg:w-60 p-2 mt-4 rounded-full hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
            {result && (
              <p className="mt-4 text-center text-sm text-green-500">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
      
    </section>
  );
}
