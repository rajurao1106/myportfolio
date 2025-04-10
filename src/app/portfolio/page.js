"use client"
import React from "react";
import educity from "../images/educity.png";
import visit from "../images/external-link.png";
import food_delivery from "../images/food_delivery.png";
import spadvertising from "../images/spadvertising.png";
import varunwadhwa from "../images/varunwadhwa.png";
import define from "../images/define.png";
import quickscan from "../images/quickscan.png";
import buddy from "../images/buddy.png";
import pracharkarsolutions from "../images/pracharkarsolutions.png";
import english_teacher from "../images/english-teacher.png";
import Asidebar from "../Asidebar";
import Image from "next/image";

export default function pages() {
  const websites = [
    {
      image: pracharkarsolutions,
      link: "https://www.pracharkarsolutions.com",
      name: "Pracharkar Solutions",
    },
    {
      image: spadvertising,
      link: "https://spadvertising.in",
      name: "Advertiisng Agency",
    },
    {
      image: varunwadhwa,
      link: "https://varunwadhwa.com",
      name: "Book Author",
    },
  ];

  const projects = [
    {
      image: english_teacher,
      link: "https://ai-projects-two.vercel.app/MakeAFriends",
      name: "English Teacher",
    },
    {
      image: define,
      link: "https://define-jss6.onrender.com",
      name: "Educity Website",
    },
    {
      image: buddy,
      link: "https://buddy-5ext.onrender.com/",
      name: "Buddy Website",
    },
    {
      image: food_delivery,
      link: "https://rajurao1106.github.io/food-website/",
      name: "Food Delivery Website",
    },
    {
      image: quickscan,
      link: "https://quickscan.onrender.com",
      name: "Quickscan Website",
    },
    {
      image: educity,
      link: "https://rajurao1106.github.io/educity-website/",
      name: "Educity Website",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-16 justify-center items-center bg-gray-950 py-10 text-white">
      <div className="w-[90%] flex flex-col justify-center items-center">
        {/* Section Header */}
        <h1 className="w-full text-5xl font-extrabold mb-20 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">
          WORK<p className="ml-2 text-yellow-400">WEBSITES</p>
          <p className="absolute text-8xl max-md:text-6xl opacity-10">
            PORTFOLIO
          </p>
        </h1>

        {/* Project Cards */}
        <div className="w-full flex gap-10 flex-wrap justify-center items-center">
          {websites.map((project, index) => (
            <div
              key={index}
              className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl"
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={`${project.name} preview`}
                className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute transition-all duration-300 group-hover:bg-[#0000007c] w-full h-full flex justify-center items-end p-3"
              >
                <p className="hidden group-hover:block">
                  <span className="flex justify-center items-center gap-1">
                    Visit Website{" "}
                    <Image
                      loading="lazy"
                      src={visit}
                      className="w-8 h-8"
                      alt="Visit icon"
                    />
                  </span>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] flex flex-col justify-center items-center">
        {/* Section Header */}
        <h1 className="w-full text-5xl font-extrabold mb-20 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">
          MY<p className="ml-2 text-yellow-400">PROJECTS</p>
          <p className="absolute text-8xl max-md:text-6xl opacity-10">
            PORTFOLIO
          </p>
        </h1>

        {/* Project Cards */}
        <div className="w-full flex gap-10 flex-wrap justify-center items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl"
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={`${project.name} preview`}
                className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute transition-all duration-300 group-hover:bg-[#0000007c] w-full h-full flex justify-center items-end p-3"
              >
                <p className="hidden group-hover:block">
                  <span className="flex justify-center items-center gap-1">
                    Visit Website{" "}
                    <img
                      loading="lazy"
                      src={visit}
                      className="w-8 h-8"
                      alt="Visit icon"
                    />
                  </span>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
   
    </section>
  );
}
