import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Root() {
  return (
    <div className="">
      <Sidebar />
      <div className="lg:w-[100vw-103px] mt-[72px] lg:mt-0 lg:ml-[103px] ">
        <div className="mx-auto max-w-screen-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
