import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <Theme>
      <div className="m-20 flex items-center justify-center space-x-40">
        <Head>
          <title>Contact</title>
        </Head>
        <div id="text" className="flex w-1/2 flex-col">
          <span className="font text-4xl font-semibold text-indigo-10">
            You can stalk or message me on 👀 ...
          </span>
          <br></br>
          <ul className="flex justify-between">
            <Link
              href="https://www.linkedin.com/in/manhua-lu-b9756720b/"
              target="_blank"
            >
              <li className="flex items-center justify-start space-x-10">
                <div className="hover:shadow-lg">
                  <div className="bg-white p-8 shadow-lg">
                    <p className="mb-2 text-lg font-medium leading-none">
                      LinkedIn
                    </p>
                    <span className="mb-2 flex justify-center">
                      <Image
                        src="/linkedin-logo.png"
                        alt="linkedin logo"
                        width="30"
                        height="30"
                      ></Image>
                    </span>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="https://github.com/manhualu" target="_blank">
              <li className="flex items-center justify-start space-x-10">
                <div className="hover:shadow-lg">
                  <div className="bg-white p-8 shadow-lg">
                    <p className="mb-2 text-lg font-medium leading-none">
                      Github
                    </p>
                    <span className="mb-2 flex justify-center">
                      <Image
                        src="/github-logo.png"
                        alt="github logo"
                        width="30"
                        height="30"
                      ></Image>
                    </span>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="mailto:manhua.lu64@gmail.com">
              <li className="flex items-center justify-start space-x-10">
                <div className="hover:shadow-lg">
                  <div className="bg-white p-8 shadow-lg">
                    <p className="mb-2.5 text-lg font-medium leading-none">
                      Email
                    </p>
                    <p className="mb-4 text-sm text-gray-700">
                      manhua.lu64@gmail.com
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Theme>
  );
};

export default Contact;
