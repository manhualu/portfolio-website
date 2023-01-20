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
          I am a full-time university student. However, on the side, I am a
          <span className="font-bold"> casual academic at UNSW </span>who
          teaches Database Systems (COMP3311) and junior science to children
          from years 7 to years 10!
        </p>
        <br></br>
        <p className="text-lg">
          I&apos;m also a
          <span className="font-bold"> UNSW CSESoc Development Director</span>,
          where I lead a team of 10 to continuously improve and deploy new
          features for Notangles. This involves utilising Jira + Confluence,
          reviewing Github pull requests and attending weekly meetings +
          standups.
        </p>
        <br></br>
        <p className="text-lg">
          I&apos;ve also been a{" "}
          <span className="font-bold"> CSESoc Peer Mentor</span>, where I led
          weekly meetups to help first year students transition to university in
          their first semester and feel happy + safe 🧡.
        </p>
        <br></br>
        <p className="text-lg">
          And as a part of <span className="font-bold"> CompClub </span>have
          also held free workshops that taught students of years 7 to 12 Python,
          Web Development and Shell. I love promoting education to the younger
          generation by creating a fun and collaborative environment.
        </p>
        <br></br>
        <p className="text-lg">
          Most of the time, you&apos;ll either catch me eating 🥞 or see me on
          the hunt for new music 🎶. I&apos;m also always on the lookout for
          cool photo/vid opportunities 🌇 and trying out new food places.
        </p>
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
