"use client"
import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";

export default function Pages() {
  const downloadCV = () => {
    // This would be the URL to your CV file
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1rW29mRBY6ddYMQDaoH7g7fp-VTAMNkcN/view?usp=drivesdk";
    link.download = "D_Raju_Rao_CV.pdf";
    link.click();
  };

  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center py-10 bg-gray-950 text-white h-screen max-md:h-[100%]"
    >
      <h1 className="w-full text-5xl font-extrabold mb-20 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">
        ABOUT <p className="ml-2 text-yellow-400"> ME</p>{" "}
        <p className="absolute text-8xl max-md:text-6xl opacity-10">RESUME</p>
      </h1>

      <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Personal Info */}
        <div className="w-full max-lg:text-center flex flex-col gap-6">
          <div className="flex max-md:flex-wrap text-left max-md:gap-5">
            <div className=" gap-4 flex flex-col  ">
              <h2 className="text-2xl font-bold ">PERSONAL INFO</h2>
              <p>First Name : D Raju</p>
              <p>Last Name : Rao</p>
              <p>Age : 21</p>
              <p>Nationality : Indian</p>
              <p>Freelance : None</p>
            </div>
            <div className=" justify-end gap-4 flex flex-col">
              <p>Address : Raipur, Chhattisgarh</p>
              <p>Phone : +91-7470578448</p>
              <p>Email : rajurao1106@gmail.com</p>
              <p>
                LinkedIn :{" "}
                <a
                  href="https://www.linkedin.com/in/raju-rao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/raju-rao/
                </a>
              </p>
              <p>Languages : Hindi, Telugu, English</p>
            </div>
          </div>
          <button
            onClick={downloadCV}
            className="bg-red-500 mt-4 w-52 p-3 rounded-full self-center lg:self-start"
          >
            Download CV
          </button>
        </div>

        {/* Experience Stats */}
        <div className="w-[100%] max-md:w-full flex flex-wrap gap-5 max-lg:justify-center">
          <div className="p-5 w-[15rem] h-[8rem] border rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold text-yellow-400">4+</p>
            <p>years of experience</p>
          </div>
          <div className="p-5 w-[15rem] h-[8rem] border rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold text-yellow-400">18+</p>
            <p>projects completed</p>
          </div>
          <div className="p-5 w-[15rem] h-[8rem] border rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold text-yellow-400">3+</p>
            <p>years in industry</p>
          </div>
          <div className="p-5 w-[15rem] h-[8rem] border rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold text-yellow-400">4+</p>
            <p>happy clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
