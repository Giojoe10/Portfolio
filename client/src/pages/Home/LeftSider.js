import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center gap-3 w-1 sm:w-full">
        <div className="flex flex-col gap-3 text-center sm:flex-row">
          <a href="https://www.linkedin.com/in/giovannimateusbarbieri/">
            <i class="ri-linkedin-box-fill text-gray-500 text-3xl"></i>
          </a>
          <a href="mailto:giovannimbarbieri@gmail.com">
            <i class="ri-mail-fill text-gray-500 text-2xl"></i>
          </a>
          <a href="https://github.com/Giojoe10/">
            <i class="ri-github-fill text-gray-500 text-2xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-[120px] bg-[#5f5f5f9d] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
