import { Theme } from "@radix-ui/themes";
import React from "react";

const Footer = () => {
  return (
    <Theme>
      <div className="flex justify-center bg-indigo-100 p-4 dark:bg-indigo-800">
        <span className="text-md text-gray-30 ">
          Please vote Manhua Lu for Course Projects VP 🧡
        </span>
      </div>
    </Theme>
  );
};

export default Footer;
