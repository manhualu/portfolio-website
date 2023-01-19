import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="m-20 flex">
      <Head>
        <title>Projects</title>
      </Head>
      <ul className="space-y-20">
        <li className="flex items-center justify-start space-x-10">
          <div className="hover:opacity-50">
            <Link href="https://notangles.csesoc.app/" target="_blank">
              <Image
                src="/notangles-demo.gif"
                alt="Project 1"
                width="1000"
                height="1000"
              />
            </Link>
          </div>
          <div className="hover:shadow-lg">
            <div className="bg-white p-8 shadow-lg">
              <p className="mb-2 text-lg font-medium leading-none">
                <a
                  className=""
                  href="https://notangles.csesoc.app/"
                  target="_blank"
                  title="Heading Link"
                >
                  Notangles
                </a>
              </p>
              <p className="mb-2 text-sm text-gray-700">
                As UNSW CSESoc Notangles Director, developed a web application
                with a drag-and-drop interface for students to plan their
                timetables. Personally implemented functionality to
                drag-and-drop custom-user events.
              </p>
              <ul className="flex items-center justify-between text-xs text-indigo-10">
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
                  >
                    <Image
                      src="/github-logo.png"
                      alt="Project 1"
                      width="20"
                      height="20"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="flex items-center justify-start space-x-10">
          <div className="hover:shadow-lg">
            <div className="bg-white p-8 shadow-lg">
              <p className="mb-2 text-lg font-medium leading-none">
                <span>Student Markbook (not deployed yet, sorry 😢)</span>
              </p>
              <p className="mb-2 text-sm text-gray-700">
                A web application I created to easier track the classes I am
                tutoring and store my students’ exam marks, calculate averages
                and view progress. Functionality is currently still limited.
              </p>
              <ul className="flex items-center justify-between text-xs text-indigo-10">
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
                  >
                    <Image
                      src="/github-logo.png"
                      alt="Project 1"
                      width="20"
                      height="20"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/markbook-demo.gif"
              alt="Project 2"
              width="1000"
              height="1000"
            />
          </div>
        </li>
        <li className="flex items-center justify-start space-x-10">
          <div className="hover:opacity-50">
            <Link href="#">
              <Image
                src="/frog-chair-dance.gif"
                alt="Project 1"
                width="400"
                height="400"
              />
            </Link>
          </div>
          <div className="hover:shadow-lg">
            <div className="bg-white p-8 shadow-lg">
              <p className="mb-2 text-lg font-medium leading-none">
                <a className="" href="#" title="Heading Link">
                  Portfolio Website
                </a>
              </p>
              <p className="mb-2 text-sm text-gray-700">
                The website you are on right now! 😁 Still needs to be more
                responsive and compatible for different screens.
              </p>
              <ul className="flex items-center justify-between text-xs text-indigo-10">
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Radix UI</li>
                <li className="hover:opacity-50">
                  <Link
                    href="https://github.com/manhualu/portfolio-website"
                    target="_blank"
                  >
                    <Image
                      src="/github-logo.png"
                      alt="Project 1"
                      width="20"
                      height="20"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
