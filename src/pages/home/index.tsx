/// <reference types="vite-plugin-svgr/client" />
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as NoInvoices } from "../../assets/no-invoices.svg";
import {
  Invoice_Status_Enum,
  Order_By,
  useInvoicesQuery,
  useInvoicesTotalQuery,
} from "../../generated/graphql";
import InvoiceItem, { InvoiceItemLoading } from "./components/InvoiceItem";
import Topbar from "./components/Topbar";
import type { Selection } from "react-aria-components";
import { NetworkStatus } from "@apollo/client";
import { getLocalTimeZone, parseDate } from "@internationalized/date";
import getPaymentTermsDays from "../../utils/payment_terms";

function Homepage() {
  const [filterBy, setFilterBy] = useState<Selection>(
    new Set([
      Invoice_Status_Enum.Draft,
      Invoice_Status_Enum.Pending,
      Invoice_Status_Enum.Paid,
    ])
  );
  const { data, error, fetchMore, networkStatus } = useInvoicesQuery({
    variables: {
      where: {
        status: { _in: Array.from(filterBy) as Invoice_Status_Enum[] },
      },
      order_by: {
        created_at: Order_By.Desc,
      },

      limit: 8,
    },

    notifyOnNetworkStatusChange: true,
  });
  const {
    data: countData,
    loading: countLoading,
    error: countError,
  } = useInvoicesTotalQuery({
    variables: {
      where: {
        status: { _in: Array.from(filterBy) as Invoice_Status_Enum[] },
      },
    },
  });

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      (data?.invoice?.length ?? 0) >=
        (countData?.invoice_aggregate?.aggregate?.count ?? 0)
    ) {
      return;
    }
    fetchMore({
      variables: {
        where: {
          status: { _in: Array.from(filterBy) as Invoice_Status_Enum[] },
          created_at: {
            _lt: data?.invoice[data.invoice.length - 1].created_at,
          },
        },
      },
    });
  }, [data, countData, fetchMore, filterBy]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <main className="px-6 py-9 md:px-12 md:py-36">
      <Topbar
        invoicesCount={countData?.invoice_aggregate.aggregate?.count}
        error={countError}
        loading={countLoading}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      {networkStatus === NetworkStatus.setVariables ||
      networkStatus === NetworkStatus.loading ? (
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
        <>
          <div className="space-y-4 mt-6 md:mt-14 xl:mt-16">
            {data.invoice.map((invoice) => (
              <InvoiceItem
                key={invoice.id}
                id={invoice.id}
                dueDate={
                  invoice?.payment_terms && invoice.date
                    ? parseDate(invoice.date)
                        .add({
                          days: getPaymentTermsDays(invoice?.payment_terms),
                        })
                        .toDate(getLocalTimeZone())
                    : undefined
                }
                clientName={invoice?.client_name ?? "no client name"}
                amount={invoice.items.reduce((p, c) => p + c.total, 0)}
                status={invoice.status}
              />
            ))}
          </div>
          {networkStatus === NetworkStatus.fetchMore && (
            <div className="space-y-4 mt-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
                <InvoiceItemLoading key={x} />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default Homepage;
