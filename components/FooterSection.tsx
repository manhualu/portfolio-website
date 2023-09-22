import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Theme } from "@radix-ui/themes";

const FooterSection = () => {
  return (
    <Theme>
      <footer className="mx-auto max-w-3xl bg-indigo-200 px-4 font-mono dark:bg-indigo-900 sm:px-6 md:max-w-full">
        <div className="mx-auto flex flex-col p-4 text-center text-neutral-800 dark:text-neutral-100 md:flex-row md:justify-between">
          {/* <div>© 2023 Manhua Lu</div> */}
          <div className="py-2">Vote Manhua Lu for Course Projects VP 🧡</div>

          <a
            href="https://github.com/manhualu/portfolio-website"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-800 p-2 transition-transform hover:-translate-y-1 dark:border-white"
          >
            Website Source Code (source: trust me bro)
          </a>

          <div className="mb-1 flex flex-row items-center justify-center space-x-2">
            <a
              href="https://github.com/manhualu"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub
                className="cursor-pointer text-neutral-800 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/manhua-lu-b9756720b/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin
                className="cursor-pointer text-neutral-800 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                size={30}
              />
            </a>
          </div>
        </div>
      </footer>
    </Theme>
  );
};

export default FooterSection;
