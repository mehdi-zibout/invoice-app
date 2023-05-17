import { Button as AriaButton } from "react-aria-components";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import InvoiceStatus from "../../components/InvoiceStatus";
import {
  Invoice_Status_Enum,
  Payment_Terms_Enum,
  useInvoiceByIdQuery,
} from "../../generated/graphql";
import Button from "../../components/Button";
import { ReactComponent as NoInvoices } from "../../assets/no-invoices.svg";
import { dateFormatter, numberFormatter } from "../../utils/formatters";
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
} from "@internationalized/date";
import { NumberFormatter } from "@internationalized/number";

export default function InvoiceDetails() {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useInvoiceByIdQuery({
    variables: { id: invoiceId },
  });
  const invoice = data?.invoice_by_pk;
  return (
    <main className="px-6 py-9 md:px-12 md:py-16">
      <AriaButton
        onPress={() => navigate(-1)}
        className="text-purple-800 dark:text-white hover:text-purple-100 text-hsv mb-8 transition duration-300 group"
      >
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-5 inline-block"
        >
          <path
            d="M4.3418 0.886047L0.113895 5.11395L4.3418 9.34185"
            className="stroke-purple-400  group-hover:stroke-purple-300 transition duration-300"
            strokeWidth="2"
          />
        </svg>
        Go back
      </AriaButton>

      {loading ? (
        "loading ..."
      ) : error || !invoice ? (
        <div className="flex items-center justify-center flex-col mt-10">
          <NoInvoices className="md:mb-16 mb-10" />
          <h2 className="dark:text-white text-purple-800 text-hm mb-6">
            There is nothing here
          </h2>
          <p className="text-purple-100 dark:text-gray-200 max-w-[176px] text-center text-bodyv">
            Please make sure that you're on the right page or try again later
          </p>
        </div>
      ) : (
        <>
          <Card className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-x-5">
              <span className="text-body text-[#858BB2]">Status</span>{" "}
              <InvoiceStatus className="px-4" status={invoice.status} />
            </div>
            <div className="space-x-2">
              <Button variant="secondary">Edit</Button>
              <Button variant="destructive">Delete</Button>
              <Button variant="primary">Mark as Paid</Button>
            </div>
          </Card>
          <Card className="!p-12">
            <div className="flex justify-between items-start">
              <div className="">
                <h2 className="text-purple-800 uppercase dark:text-white text-hs">
                  <span className="text-purple-100">#</span>
                  {`${invoice.id}`.slice(0, 6)}
                </h2>
                <p className="text-purple-200 dark:text-gray-200 text-body mt-2">
                  {invoice.project_description}
                </p>
              </div>
              <ul className="dark:text-gray-200 text-purple-200 text-body text-right">
                <li>{invoice.bill_from.street_address}</li>
                <li>{invoice.bill_from.city}</li>
                <li>{invoice.bill_from.post_code}</li>
                <li>{invoice.bill_from.country}</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 mt-3">
              <section className="">
                <p className="text-purple-200 dark:text-gray-200 text-body mb-3">
                  Invoice Date
                </p>
                <p className="dark:text-white text-purple-800 text-hs">
                  {dateFormatter.format(new Date(invoice.invoice_date))}
                </p>
                <p className="text-purple-200 dark:text-gray-200 text-body mt-8 mb-3">
                  Payment Due
                </p>
                <p className="dark:text-white text-purple-800 text-hs">
                  {dateFormatter.format(
                    parseDate(invoice.invoice_date)
                      .add({ days: getPaymentTermsDays(invoice.payment_terms) })
                      .toDate(getLocalTimeZone())
                  )}
                </p>
              </section>
              <section className="">
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
              <section className="">
                <p className="text-purple-200 dark:text-gray-200 text-body mb-3">
                  Sent To
                </p>
                <p className="dark:text-white text-purple-800 text-hs mb-2">
                  {invoice.client_email}
                </p>
              </section>
            </div>
            <div className="bg-[#F9FAFE] dark:bg-purple-500 rounded-t-lg pt-8 px-8 pb-10 grid grid-cols-9 mt-12">
              <p className="text-purple-200 dark:text-gray-200 text-body mb-3 col-span-4">
                Item Name
              </p>
              <p className="text-purple-200 dark:text-gray-200 text-body mb-3 col-span-1 text-center">
                QTY.
              </p>
              <p className="text-purple-200 dark:text-gray-200 text-body mb-3 col-span-2 text-right">
                Price
              </p>
              <p className="text-purple-200 dark:text-gray-200 text-body mb-3 col-span-2 text-right">
                Total
              </p>
              <ul className="col-span-9 space-y-8 mt-8">
                {invoice.invoice_items.map((item) => (
                  <li key={item.id} className="grid grid-cols-9">
                    <p className="dark:text-white text-purple-800 text-hs col-span-4">
                      {item.name}
                    </p>
                    <p className="dark:text-gray-200 text-purple-200 text-hs col-span-1 text-center">
                      {item.quantity}
                    </p>
                    <p className="dark:text-gray-200 text-purple-200 text-hs col-span-2 text-right">
                      {item.price}
                    </p>
                    <p className="dark:text-white text-purple-800 text-hs col-span-2 text-right">
                      {numberFormatter.format(
                        item.quantity * +`${item.price}`.slice(1)
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#373B53] dark:bg-purple-800 rounded-b-lg px-8 py-6 flex justify-between items-center">
              <p className="text-body text-white">Amount Due</p>
              <p className="text-hm text-white">
                {numberFormatter.format(
                  invoice.invoice_items.reduce(
                    (p, c) => p + +`${c.price}`.slice(1) * c.quantity,
                    0
                  )
                )}
              </p>
            </div>
          </Card>
        </>
      )}
    </main>
  );
}

function getPaymentTermsDays(paymentTerms: Payment_Terms_Enum): number {
  switch (paymentTerms) {
    case Payment_Terms_Enum.Net1:
      return 1;
    case Payment_Terms_Enum.Net14:
      return 14;
    case Payment_Terms_Enum.Net30:
      return 30;
    case Payment_Terms_Enum.Net7:
      return 7;
  }
}
