import React from "react";
import Image from "next/image";
import { Theme } from "@radix-ui/themes";

const ExperienceSection = () => {
  return (
    <Theme>
      <section id="experience">
        <div className="m-16 space-y-6 pb-12 md:pt-16 ">
          <span className="text-center text-4xl font-bold text-indigo-500">
            Experience
          </span>

          <div>
            <div
              id="notangles-2023"
              className="flex flex-col justify-center space-y-6 border-b md:flex-row"
            >
              <div className="md:my-8">
                <p className="flex text-xl font-semibold">
                  CSESoc Notangles Projects Director 2023
                </p>
              </div>

              <div className="md:px-8">
                <p className="text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Leading a team of 7 members with my co-director 😎
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Maintaining a group of not only subcom members, but a tight
                    knit group of friends with everlasting memories 🥺
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Utilising Jira + Confluence, reviewing Github pull requests,
                    leading productive weekly meetings + standups
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Organising a blue mountains trip, walks, badminton and many
                    dinners
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Helping organise the Dev Taster Day
                  </li>
                </p>
              </div>

              <div>
                <div id="notangles-2023-images" className="flex">
                  <div className="px-2 text-center">
                    <Image
                      src="/notangles-dir.JPG"
                      alt="My-lovely-Notangles"
                      width="500"
                      height="500"
                    ></Image>
                    <span className=" italic text-gray-500">
                      my lovely Notangles
                    </span>
                  </div>

                  <div className="text-center">
                    <Image
                      src="/notangles-badminton.JPG"
                      alt="notangles-badminton"
                      width="500"
                      height="500"
                    ></Image>
                    <span className="italic text-gray-500">badminton 🏸</span>
                  </div>
                </div>
                <br></br>

                <div id="notangles-2023-images2" className="flex">
                  <div className="px-2 text-center">
                    <Image
                      src="/notangles-x-uiux.JPG"
                      alt="notangles-x-uiux"
                      width="500"
                      height="500"
                    ></Image>
                    <span className="italic text-gray-500">
                      cross bonding with UI/UX!
                    </span>
                  </div>

                  <div className="text-center">
                    <Image
                      src="/notangles-meetings.JPG"
                      alt="notangles-meetings"
                      width="500"
                      height="500"
                    ></Image>
                    <span className="italic text-gray-500">
                      weekly team meetings
                    </span>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <br></br>

            <div
              id="notangles-2022"
              className="flex flex-col justify-center space-y-6 border-b md:flex-row"
            >
              <div className="md:my-8 md:w-1/4">
                <p className="flex text-xl font-semibold">
                  CSESoc Notangles Subcommittee 2022
                </p>
              </div>

              <div className="md:px-8">
                <p className="text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Deployed custom events
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Where I learnt the foundation of my React, TypeScript and
                    general frontend knowledge!
                  </li>
                </p>
              </div>

              <div>
                <div id="notangles-2022-images" className="flex justify-center">
                  <div className="px-2 text-center">
                    <Image
                      src="/notangles-2022.JPG"
                      alt="notangles-2022"
                      width="400"
                      height="400"
                    ></Image>
                    <span className="italic text-gray-500">
                      where it all started...
                    </span>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <br></br>

            <div
              id="peer=mentoring"
              className="flex flex-col justify-center space-y-6 border-b md:flex-row"
            >
              <div className="md:my-8 md:w-1/4">
                <p className="flex text-xl font-semibold">
                  CSESoc Peer Mentor 2022
                </p>
              </div>

              <div className="md:px-8">
                <p className="text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Led weekly meetups to help first year students transition to
                    university in their first semester and feel happy + safe 🧡.
                  </li>
                </p>
              </div>

              <div>
                <div id="peer-mentor-images" className="flex justify-center">
                  <div className="px-2 text-center">
                    <Image
                      src="/peer-mentoring.JPG"
                      alt="peer-mentoring"
                      width="400"
                      height="400"
                    ></Image>
                    <span className="italic text-gray-500">
                      my wonderful peer mentees
                    </span>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <br></br>

            <div
              id="compclub"
              className="flex flex-col justify-center space-y-6 border-b md:flex-row"
            >
              <div className="md:my-12 md:w-1/4">
                <p className="flex text-xl font-semibold">CompClub Mentor</p>
              </div>

              <div className="md:px-8">
                <p className="text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Held free workshops that taught a class of 27 students of
                    years 7 to 12 Python, Web Development and Shell.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Promoted computing to younger generation by creating a fun
                    and collaborative environment.
                  </li>
                </p>
                <br></br>
              </div>
            </div>
            <br></br>

            <div
              id="unsw-tutor"
              className="flex flex-col justify-center space-y-6 md:flex-row"
            >
              <div className="md:my-12 md:w-1/4">
                <p className="flex text-xl font-semibold">
                  UNSW CSE Casual Academic
                </p>
              </div>

              <div className="md:px-8">
                <p className="text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Teaching COMP3311 (Database Systems) and COMP2041 (Software
                    Construction: Techniques and Tools)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Helping others and encouraging a love for computer science!
                  </li>
                </p>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </section>
    </Theme>
  );
};

export default ExperienceSection;
