import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="m-20 flex items-center justify-center space-x-40">
      <Head>
        <title>Contact</title>
      </Head>
      <div id="text" className="flex w-1/2 flex-col">
        <span className="font text-4xl font-semibold text-indigo-10">
          You can stalk me 👀 or message me on ...
        </span>
        <br></br>
        <ul className="flex justify-between">
          <li className="flex items-center justify-start space-x-10">
            <div className="hover:shadow-lg">
              <div className="bg-white p-8 shadow-lg">
                <p className="mb-2 text-lg font-medium leading-none">Email</p>
                <p className="mb-2 text-sm text-gray-700">
                  <Link href="mailto:manhua.lu64@gmail.com">
                    manhua.lu64@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </li>
          <li className="flex items-center justify-start space-x-10">
            <div className="hover:shadow-lg">
              <div className="bg-white p-8 shadow-lg">
                <p className="mb-2 text-lg font-medium leading-none">
                  LinkedIn
                </p>
                <span className="mb-2 flex justify-center">
                  <Link
                    href="https://www.linkedin.com/in/manhua-lu-b9756720b/"
                    target="_blank"
                  >
                    <Image
                      src="/linkedin-logo.png"
                      alt="linkedin logo"
                      width="30"
                      height="30"
                    ></Image>
                  </Link>
                </span>
              </div>
            </div>
          </li>
          <li className="flex items-center justify-start space-x-10">
            <div className="hover:shadow-lg">
              <div className="bg-white p-8 shadow-lg">
                <p className="mb-2 text-lg font-medium leading-none">Github</p>
                <span className="mb-2 flex justify-center">
                  <Link href="https://github.com/manhualu" target="_blank">
                    <Image
                      src="/github-logo.png"
                      alt="github logo"
                      width="30"
                      height="30"
                    ></Image>
                  </Link>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="relative"></div>
    </div>
  );
};

export default Contact;
