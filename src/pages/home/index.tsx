/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as NoInvoices } from "../../assets/no-invoices.svg";
import Sidebar from "../../components/Sidebar";
import { useAllInvoicesQuery } from "../../generated/graphql";
import Topbar from "./components/topbar";

function Homepage() {
  const { data } = useAllInvoicesQuery();

  return (
    <div className="">
      <Sidebar />
      <main className="md:px-12 md:py-36  lg:w-[100vw-103px] mt-[72px] lg:mt-0 lg:ml-[103px] px-6 py-9">
        <div className="mx-auto max-w-screen-md  ">
          <Topbar />
          {!data || data.invoice.length === 0 ? (
            <div className="w-full min-h-[calc(100vh-72px-288px)] flex items-center justify-center flex-col ">
              <NoInvoices className="md:mb-16 mb-10" />
              <h2 className="dark:text-white text-purple-800 text-hm mb-6">
                There is nothing here
              </h2>
              <p className="text-purple-100 dark:text-gray-200 max-w-[176px] text-center text-bodyv">
                Create an invoice by clicking the New button and get started
              </p>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default Homepage;
