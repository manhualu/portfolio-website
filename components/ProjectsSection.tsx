import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Theme } from "@radix-ui/themes";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectsSection = () => {
  return (
    <Theme>
      <section id="projects">
        <div className="m-10 space-y-6 pb-12 font-mono md:m-32 md:pt-16">
          <span className="text-4xl font-bold text-indigo-500">Projects</span>

          <div
            id="project-notangles"
            className="flex flex-col py-8 md:flex-row md:space-x-10"
          >
            <div id="notangles-image" className="hover:opacity-50">
              <Link href="https://notangles.csesoc.app/" target="_blank">
                <Image
                  src="/notangles-demo.gif"
                  alt="Project 1"
                  width="1000"
                  height="1000"
                />
              </Link>
            </div>

            <div
              id="notangles-info-card"
              className="flex items-center border p-8 shadow-md hover:shadow-indigo-300"
            >
              <a
                className=""
                href="https://notangles.csesoc.app/"
                target="_blank"
                title="Heading Link"
                rel="noreferrer"
              >
                <p className=" mb-2 text-lg font-bold leading-none text-indigo-500">
                  Notangles
                </p>

                <p className="text-sm">
                  As UNSW CSESoc Notangles Director, developed a web application
                  with a drag-and-drop interface for students to plan their
                  timetables. Personally implemented functionality to
                  drag-and-drop custom-user events.
                </p>

                <ul className="flex flex-col items-center space-y-2 py-2 text-xs text-indigo-10 md:flex-row md:justify-between md:space-y-0">
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>Nest.js</li>
                  <li className="hover:opacity-50">
                    <Link
                      href="https://github.com/csesoc/notangles"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineGithub
                        className="cursor-pointer text-neutral-800 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                        size={16}
                      />
                    </Link>
                  </li>
                </ul>
              </a>
            </div>
          </div>

          <hr></hr>

          <div
            id="project-markbook"
            className="flex flex-col py-8 md:flex-row md:space-x-10"
          >
            <div
              id="markbook-info-card"
              className="flex items-center border p-8 shadow-md hover:shadow-indigo-300"
            >
              <a
                className=""
                target="_blank"
                title="Heading Link"
                rel="noreferrer"
              >
                <p className=" mb-2 text-lg font-bold leading-none text-indigo-500">
                  Student Markbook (not deployed yet, sorry 😢)
                </p>

                <p className="text-sm">
                  A web application I created to easier track the classes I am
                  tutoring and store my students&apos; exam marks, calculate
                  averages and view progress. Functionality is currently still
                  limited.
                </p>

                <ul className="flex flex-col items-center space-y-2 py-2 text-xs text-indigo-10 md:flex-row md:justify-between md:space-y-0">
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Nest.js</li>
                  <li>PostgreSQL</li>
                  <li>Prisma</li>
                  <li>Tailwind</li>
                  <li>Radix UI</li>
                  <li className="hover:opacity-50">
                    <Link
                      href="https://github.com/manhualu/markbook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineGithub
                        className="cursor-pointer text-neutral-800 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                        size={16}
                      />
                    </Link>
                  </li>
                </ul>
              </a>
            </div>

            <div id="markbook-image" className="hover:opacity-50">
              <Image
                src="/markbook-demo.gif"
                alt="Project 2"
                width="1000"
                height="1000"
              />
            </div>
          </div>

          <hr></hr>

          <div
            id="project-portfolio-web"
            className="flex flex-col py-8 md:flex-row md:space-x-10"
          >
            <div
              id="markbook-image"
              className="flex justify-center hover:opacity-50"
            >
              <Link href="#" target="_blank">
                <Image
                  src="/frog-chair-dance.gif"
                  alt="Project 1"
                  width="300"
                  height="300"
                />
              </Link>
            </div>
            <div
              id="portfolio-web-info-card"
              className="flex items-center border p-8 shadow-md hover:shadow-indigo-300"
            >
              <a
                className=""
                href="#"
                target="_blank"
                title="Heading Link"
                rel="noreferrer"
              >
                <p className=" mb-2 text-lg font-bold leading-none text-indigo-500">
                  Portfolio Website
                </p>

                <p className="text-sm">
                  The website you are on right now! 😁 Still needs to be more
                  responsive, compatible for different screens and support dark
                  mode.
                </p>

                <ul className="flex flex-col items-center space-y-2 py-2 text-xs text-indigo-10 md:flex-row md:justify-between md:space-y-0">
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Radix UI</li>
                  <li className="hover:opacity-50">
                    <Link
                      href="https://github.com/manhualu/portfolio-website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineGithub
                        className="cursor-pointer text-neutral-800 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                        size={16}
                      />
                    </Link>
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Theme>
  );
};

export default ProjectsSection;
