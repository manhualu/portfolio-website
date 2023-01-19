import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="m-40 flex">
      <ul className="space-y-20">
        <li className="flex justify-between space-x-10">
          <div>
            <Image
              src="/orange-sky.jpg"
              alt="Project 1"
              width="600"
              height="600"
            />
          </div>
          <div className="">
            <div className="bg-white p-8 shadow-lg">
              <p className="mb-2 text-lg font-medium leading-none">
                <a className="" href="#" title="Heading Link">
                  Project 1
                </a>
              </p>
              <p className="mb-2 text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex justify-between text-xs text-gray-500">
                <li>React</li>
                <li>TypeScript</li>
                <li>NodeJS</li>
                <li>NestJS</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="flex justify-between space-x-10">
          <div>
            <Image
              src="/orange-sky.jpg"
              alt="Project 1"
              width="600"
              height="600"
            />
          </div>
          <div className="">
            <div className="bg-white p-8 shadow-lg">
              <p className="mb-2 text-lg font-medium leading-none">
                <a className="" href="#" title="Heading Link">
                  Project 2
                </a>
              </p>
              <p className="mb-2 text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex justify-between text-xs text-gray-500">
                <li>React</li>
                <li>TypeScript</li>
                <li>NodeJS</li>
                <li>NestJS</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="flex justify-between space-x-10">
          <div>
            <Image
              src="/orange-sky.jpg"
              alt="Project 1"
              width="600"
              height="600"
            />
          </div>
          <div className="">
            <div className="bg-white p-8 shadow-lg">
              <p className="mb-2 text-lg font-medium leading-none">
                <a className="" href="#" title="Heading Link">
                  Project 3
                </a>
              </p>
              <p className="mb-2 text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex justify-between text-xs text-gray-500">
                <li>React</li>
                <li>TypeScript</li>
                <li>NodeJS</li>
                <li>NestJS</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
