import React from "react";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <div className="m-20 flex items-center justify-center space-x-40">
      <Head>
        <title>About</title>
      </Head>
      <div id="text" className="flex w-1/2 flex-col">
        <span className="font text-4xl font-semibold text-indigo-10">
          A bit about myself...
        </span>
        <br></br>
        <p className="text-lg">
          I'm currently a 3rd year Computer Science and Commerce (Finance)
          student. Right now, I'm one of the{" "}
          <span className="font-bold">projects directors of Notangles!</span>
        </p>
        <br></br>
        <p className="text-lg">
          I looovee food 🥞, discovering new music 🎶 and looking out for cool
          photo/vid opportunities 🌇.
        </p>
        <br></br>

        <p className="text-lg">
          Most importantly, I'm always seeking to make others smile, building
          authentic relationships and being a force for good in the world 🧡.
        </p>
        <br></br>
      </div>

      <div className="relative">
        <Image
          src="/manhua-about.JPG"
          alt="Manhua"
          width="500"
          height="500"
          className="relative h-auto shadow-lg"
        ></Image>
        <Image
          src="/manhua-about-2.JPG"
          alt="Manhua"
          width="500"
          height="500"
          className="relative z-10 h-auto shadow-lg"
        ></Image>
      </div>
    </div>
  );
};

export default About;
