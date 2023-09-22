import { Head } from "next/document";
import Image from "next/image";
import React from "react";
import classes from "../index.module.css";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="m-32 flex flex-col items-center justify-center space-y-10 py-32 md:flex-row md:space-x-16 md:py-2 md:text-left">
        <div id="text" className="">
          <div>
            <span className="font text-xl text-indigo-10">
              Hello there <span className={`${classes.wave}`}>👋</span> I&apos;m
            </span>
            <br></br>
            <span className="text-6xl font-bold">Manhua Lu</span>
            <br></br>
            <span className="text-lg text-gray-10">
              And I&apos;m running for...
            </span>
            <br></br>
            <span className="text-gray-20 text-2xl font-semibold">
              Course Projects VP 🙂
            </span>
          </div>
        </div>

        <div id="image" className="md:mt-2 md:w-1/3">
          <Image
            src="/manhua2.JPG"
            alt="Manhua"
            width="400"
            height="400"
            className="rounded-full shadow-lg"
            priority
          ></Image>
        </div>
      </div>

      <div className="flex flex-row justify-center p-12">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
