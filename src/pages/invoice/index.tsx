import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import InvoiceStatus from "../../components/InvoiceStatus";
import { useInvoiceByIdQuery } from "../../generated/graphql";
import { dateFormatter } from "../../utils/formatters";
import { getLocalTimeZone, parseDate } from "@internationalized/date";
import getPaymentTermsDays from "../../utils/payment_terms";
import GoBackButton from "../../components/GoBackButton";
import Total from "./components/Total";
import ItemsList, { ItemsListMobile } from "./components/ItemsList";
import InvoiceDetailsLoading from "./components/Loading";
import InvoiceDetailsError from "./components/Error";
import EditButton from "./components/EditButton";
import DeleteButton from "./components/DeleteButton";
import MarkAsPaid from "./components/MarkAsPaidButton";

export default function InvoiceDetails() {
  const { invoiceId } = useParams();
  const { data, loading, error } = useInvoiceByIdQuery({
    variables: { id: invoiceId },
  });
  const invoice = data?.invoice_by_pk;

  return (
    <main className="px-6 pt-9 md:px-12 md:py-16 pb-[127px]">
      <GoBackButton />
      {loading ? (
        <InvoiceDetailsLoading />
      ) : error || !invoice ? (
        <InvoiceDetailsError />
      ) : (
        <>
          <Card className="flex justify-between items-center mb-6">
            <div className="flex justify-between w-full md:w-auto md:justify-start items-center gap-x-5">
              <span className="text-body text-[#858BB2]">Status</span>{" "}
              <InvoiceStatus className="px-4" status={invoice.status} />
            </div>
            <div className="space-x-2 md:block hidden">
              <EditButton invoice={invoice} />
              <DeleteButton id={invoice.id} />
              <MarkAsPaid id={invoice.id} status={invoice.status} />
            </div>
          </Card>
          <Card className="md:!p-12 !p-6 ">
            <div className="flex justify-between flex-col gap-y-8 md:flex-row items-start ">
              <div className="">
                <h2 className="text-purple-800 uppercase dark:text-white text-hs">
                  <span className="text-purple-100">#</span>
                  {`${invoice?.id}`.slice(0, 6).toUpperCase()}
                </h2>
                <p className="text-purple-200 dark:text-gray-200 text-body mt-2">
                  {invoice.project_description}
                </p>
              </div>
              <ul className="dark:text-gray-200 text-purple-200 text-body md:text-right">
                <li>{invoice.bill_from_address?.street_address}</li>
                <li>{invoice.bill_from_address?.city}</li>
                <li>{invoice.bill_from_address?.post_code}</li>
                <li>{invoice.bill_from_address?.country}</li>
              </ul>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-3 mt-8 md:mt-3">
              <section className="col-span-2 md:col-span-1">
                <p className="text-purple-200 dark:text-gray-200 text-body mb-3 ">
                  Invoice Date
                </p>
                <p className="dark:text-white text-purple-800 text-hs">
                  {invoice.date && dateFormatter.format(new Date(invoice.date))}
                </p>
                <p className="text-purple-200 dark:text-gray-200 text-body mt-8 mb-3 ">
                  Payment Due
                </p>
                <p className="dark:text-white text-purple-800 text-hs">
                  {invoice.payment_terms &&
                    invoice.date &&
                    dateFormatter.format(
                      parseDate(invoice.date)
                        .add({
                          days: getPaymentTermsDays(invoice?.payment_terms),
                        })
                        .toDate(getLocalTimeZone())
                    )}
                </p>
              </section>
              <section className="col-span-2 md:col-span-1">
                <p className="text-purple-200 dark:text-gray-200 text-body mb-3">
                  Bill To
                </p>
                <p className="dark:text-white text-purple-800 text-hs mb-2">
                  {invoice.client_name}
                </p>
                <ul className="dark:text-gray-200 text-purple-200 text-body">
                  <li>{invoice?.client_address?.street_address}</li>
                  <li>{invoice?.client_address?.city}</li>
                  <li>{invoice?.client_address?.post_code}</li>
                  <li>{invoice?.client_address?.country}</li>
                </ul>
              </section>
              <section className="col-span-4 md:col-span-1 mt-8 mb-9 md:mb-0 md:mt-0">
                <p className="text-purple-200 dark:text-gray-200 text-body mb-3">
                  Sent To
                </p>
                <p className="dark:text-white text-purple-800 text-hs mb-2">
                  {invoice.client_email}
                </p>
              </section>
            </div>
            <ItemsListMobile items={invoice.items} />
            <ItemsList items={invoice.items} />
            <Total total={invoice?.items?.reduce((p, c) => p + c.total, 0)} />
          </Card>
          <div className="md:hidden fixed bottom-0 inset-x-0  bg-purple-600 flex items-center justify-center w-screen h-[91px] p-6 space-x-2">
            <EditButton invoice={invoice} />
            <DeleteButton id={invoice.id} />
            <MarkAsPaid id={invoice.id} status={invoice.status} />
          </div>
        </>
      )}
    </main>
  );
}
