import React from "react";
import Image from "next/image";
import classes from "../index.module.css";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { Theme } from "@radix-ui/themes";

const HeroSection = () => {
  return (
    <Theme>
      <section id="home">
        <div className="m-32 flex flex-col items-center justify-center space-y-10 font-mono md:flex-row md:space-x-32">
          <div id="text" className="">
            <div>
              <span className="text-xl text-indigo-10">
                Hello there <span className={`${classes.wave}`}>👋,</span>{" "}
                I&apos;m
              </span>
              <br></br>
              <span className="text-6xl font-bold">Manhua Lu</span>
              <br></br>
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
    </Theme>
  );
};

export default HeroSection;
