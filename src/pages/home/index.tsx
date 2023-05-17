/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { ReactComponent as NoInvoices } from "../../assets/no-invoices.svg";
import {
  Invoice_Status_Enum,
  Order_By,
  useInvoicesQuery,
} from "../../generated/graphql";
import InvoiceItem, { InvoiceItemLoading } from "./components/InvoiceItem";
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
      order_by: {
        updated_at: Order_By.Desc,
      },
    },
  });

  return (
    <main className="px-6 py-9 md:px-12 md:py-36">
      <Topbar filterBy={filterBy} setFilterBy={setFilterBy} />
      {loading ? (
        <div className="space-y-4 mt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
            <InvoiceItemLoading key={x} />
          ))}
        </div>
      ) : !data || error ? null : data.invoice.length === 0 ? (
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
              id={invoice.id}
              dueDate={invoice.date}
              clientName={invoice?.client_name ?? "no client name"}
              amount={invoice.items.reduce((p, c) => p + c.total, 0)}
              status={invoice.status}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Homepage;
