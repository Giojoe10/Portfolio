import React from "react";

function Footer() {
  return (
    <div className="py-10 bg-primary w-full">
      <div className="h-[1px] w-full bg-gray-700 hidden dark:visible" ></div>

      <div className="flex items-center justify-center flex-col dark:mt-10 opacity-70">
            <h1 className="text-white">
                Este portfolio foi desenvolvido por
            </h1>
            <h1 className="text-tertiary">Giovanni Mateus Barbieri</h1>
      </div>
    </div>
  );
}

export default Footer;
