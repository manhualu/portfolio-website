import { Theme } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Theme>
      <section id="about">
        <div className="m-24 pb-12 md:pt-16 md:pb-48">
          <span className="text-center text-4xl font-bold text-indigo-10">
            A bit about myself...
          </span>
          <div className="flex flex-col space-x-12 md:flex-row">
            <div className="flex flex-col items-stretch justify-center space-y-10">
              <p className="text-lg">
                I&apos;m currently a 3rd year Computer Science and Commerce
                (Finance) student. Right now, I&apos;m one of the{" "}
                <span className="font-bold">
                  projects directors of Notangles!
                </span>
              </p>
              <p className="text-lg">
                I looovee food 🥞, discovering new music 🎶 and looking out for
                cool photo/vid opportunities 🌇.
              </p>
              <p className="text-lg">
                Most importantly, I&apos;m always seeking to make others smile,
                building authentic relationships and being a force for good in
                the world 🧡.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/manhua-about.JPG"
                alt="Manhua"
                width="400"
                height="400"
                className="relative h-auto shadow-lg"
              ></Image>
              <Image
                src="/manhua-about-2.JPG"
                alt="Manhua"
                width="400"
                height="400"
                className="relative z-10 h-auto shadow-lg"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </Theme>
  );
};

export default AboutSection;
