/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { ReactComponent as NoInvoices } from "../../assets/no-invoices.svg";
import Sidebar from "../../components/Sidebar";
import { Invoice_Status_Enum, useInvoicesQuery } from "../../generated/graphql";
import InvoiceItem from "./components/InvoiceItem";
import Topbar from "./components/Topbar";
import type { Selection } from "react-aria-components";

function Homepage() {
  const [filterBy, setFilterBy] = useState<Selection>(
    new Set([
      Invoice_Status_Enum.Draft,
      Invoice_Status_Enum.Pending,
      Invoice_Status_Enum.Paid,
    ])
  );
  const { data, loading, error } = useInvoicesQuery({
    variables: {
      where: {
        status: { _in: Array.from(filterBy) as Invoice_Status_Enum[] },
      },
    },
  });
  console.log(data);
  return (
    <div className="">
      <Sidebar />
      <main className="md:px-12 md:py-36  lg:w-[100vw-103px] mt-[72px] lg:mt-0 lg:ml-[103px] px-6 py-9">
        <div className="mx-auto max-w-screen-md  ">
          <Topbar filterBy={filterBy} setFilterBy={setFilterBy} />
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
          ) : (
            <div className="space-y-4 mt-6">
              {data.invoice.map((invoice) => (
                <InvoiceItem
                  key={invoice.id}
                  id={(invoice.id as string).slice(0, 6)}
                  dueDate={invoice.invoice_date}
                  clientName={invoice?.client_name ?? "no client name"}
                  amount={invoice.invoice_items.reduce(
                    (p, c) => p + +`${c.price}`.slice(1) * c.quantity,
                    0
                  )}
                  status={invoice.status}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Homepage;
