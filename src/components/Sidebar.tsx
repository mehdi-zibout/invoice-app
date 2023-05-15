/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { useState } from "react";
import { Button as AriaButton } from "react-aria-components";

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="bg-[#373B53] w-screen h-[72px] lg:h-screen lg:w-[103px] fixed lg:left-0 top-0 flex justify-between items-center lg:flex-col">
      <Logo className="lg:w-[103px] lg:h-[103px]" />
      <div className="flex justify-between items-center lg:flex-col">
        <div className="px-6 lg:py-6 h-[72px] lg:w-[103px] lg:h-auto flex items-center justify-center border-r lg:border-b lg:border-r-0 border-[#494E6E] ">
          <AriaButton
            className={() => `outline-none`}
            onPress={() => {
              setIsDarkMode(!isDarkMode);
              document.querySelector("html")?.classList.toggle("dark");
            }}
          >
            {isDarkMode ? (
              <div className="bg-[#858BB2] w-2.5 h-2.5 rounded-full"></div>
            ) : (
              <Moon />
            )}
          </AriaButton>
        </div>
        <div className="px-6 lg:py-6">
          <img src="/image-avatar.jpg" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}
