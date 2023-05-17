import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function Root() {
  return (
    <>
      <SignedIn>
        <Sidebar />
        <div className="lg:w-[100vw-103px] mt-[72px] lg:mt-0 lg:ml-[103px] ">
          <div className="mx-auto max-w-screen-md">
            <Outlet />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default Root;
