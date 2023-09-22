import { Theme } from "@radix-ui/themes";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <Theme>
      <div className="mx-40 my-20 flex  space-x-40">
        <Head>
          <title>Experience</title>
        </Head>

        <div>
          <span className="font text-4xl font-semibold text-indigo-10">
            Experience
          </span>
          <br></br>

          <table className="table-fixed">
            <tr id="notangles-2023" className="border-b">
              <td>
                <p className="w-1/8 flex text-xl font-semibold">
                  CSESoc Notangles Projects Director 2023
                </p>
              </td>
              <td className="w-1/2">
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
              </td>

              <td>
                <div id="notangles-2023-images" className="flex">
                  <div className="px-2 text-center">
                    <Image
                      src="/notangles-dir.JPG"
                      alt="My-lovely-Notangles"
                      width="500"
                      height="500"
                    ></Image>
                    <span className=" italic text-gray-8">
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
                    <span className="italic text-gray-8">badminton 🏸</span>
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
                    <span className="italic text-gray-8">
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
                    <span className="italic text-gray-8">
                      weekly team meetings
                    </span>
                  </div>
                </div>
                <br></br>
              </td>
            </tr>
            <br></br>

            <tr id="notangles-2022" className="border-b">
              <td>
                <p className="flex w-1/4 text-xl font-semibold">
                  CSESoc Notangles Subcommittee 2022
                </p>
              </td>
              <td>
                <p className="text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Deployed custom events
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Where I learnt the foundation of my React, TypeScript and
                    general frontend knowledge!{" "}
                  </li>
                </p>
              </td>
              <td className=" p-2 text-center">
                <div className="flex justify-center">
                  <Image
                    src="/notangles-2022.JPG"
                    alt="notangles-2022"
                    width="400"
                    height="400"
                  ></Image>
                </div>
                <span className="italic text-gray-8">
                  where it all started...
                </span>
                <br></br>
              </td>
            </tr>
            <br></br>

            <tr id="peer-mentoring" className="border-b">
              <td>
                <p className="flex w-1/2 text-xl font-semibold">
                  CSESoc Peer Mentor 2022
                </p>
              </td>
              <td>
                <p className="text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    Led weekly meetups to help first year students transition to
                    university in their first semester and feel happy + safe 🧡.
                  </li>
                </p>
              </td>
              <td className="p-2 text-center">
                <div className="flex justify-center">
                  <Image
                    src="/peer-mentoring.JPG"
                    alt="peer-mentoring"
                    width="400"
                    height="400"
                  ></Image>
                </div>

                <span className="italic text-gray-8">
                  my wonderful peer mentees
                </span>
                <br></br>
              </td>
            </tr>
            <br></br>

            <tr id="compclub" className="border-b">
              <td>
                <p className="flex w-1/2 text-xl font-semibold">
                  CompClub Mentor
                </p>
              </td>
              <td>
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
                  <br></br>
                </p>
              </td>
            </tr>
            <br></br>

            <tr id="unsw-tutor">
              <td>
                <p className="flex w-1/5 text-xl font-semibold">
                  UNSW CSE Casual Academic
                </p>
              </td>
              <td>
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
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Theme>
  );
};

export default Experience;
