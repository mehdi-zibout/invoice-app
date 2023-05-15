/// <reference types="vite-plugin-svgr/client" />
import { useAllInvoicesQuery } from "./generated/graphql";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";
import { useState } from "react";
import { Button as AriaButton } from "react-aria-components";
import Button from "./components/Button";
function App() {
  const { data } = useAllInvoicesQuery();
  console.log(data);
  return (
    <div className="">
      <Sidebar />

      <main className="md:px-12 md:py-36  lg:w-[100vw-103px] mt-[72px] lg:mt-0 lg:ml-[103px] px-6 py-9">
        <div className="mx-auto max-w-screen-md">
          <Topbar />
        </div>
      </main>
    </div>
  );
}

export default App;
function Topbar() {
  return (
    <section className="flex items-center justify-between">
      <div className="">
        <h1 className="text-purple-800 mb-[3px] md:mb-1.5 text-hm dark:text-white ">
          Invoices
        </h1>
        <p className="text-purple-100 text-bodyv">No invoices</p>
      </div>
      <div className="">
        <Button
          variant="primary"
          className="!pl-1.5 !pr-3 !py-1.5 flex items-center"
        >
          <div
            aria-hidden="true"
            className="rounded-full mr-2  flex justify-center items-center w-8 h-8 bg-white text-purple-400"
          >
            <svg
              className="mt-0.5"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.31311 10.0234V6.3136H10.0229V3.73327H6.31311V0.0234375H3.73278V3.73327H0.0229492V6.3136H3.73278V10.0234H6.31311Z"
                fill="#7C5DFA"
              />
            </svg>
          </div>
          New
        </Button>
      </div>
    </section>
  );
}

function Sidebar() {
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
