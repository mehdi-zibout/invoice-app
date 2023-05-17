import {
  Button as AriaButton,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
} from "react-aria-components";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import InvoiceStatus from "../../components/InvoiceStatus";
import {
  Invoice_Status_Enum,
  InvoicesDocument,
  InvoicesTotalDocument,
  Payment_Terms_Enum,
  useDeleteInvoiceMutation,
  useInvoiceByIdQuery,
  useMarkAsPaidMutation,
} from "../../generated/graphql";
import Button from "../../components/Button";
import { ReactComponent as NoInvoices } from "../../assets/no-invoices.svg";
import { dateFormatter, numberFormatter } from "../../utils/formatters";
import { getLocalTimeZone, parseDate } from "@internationalized/date";
import UpsertInvoice from "../home/UpsertInvoice";
import { useState } from "react";

export default function InvoiceDetails() {
  const { invoiceId } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useInvoiceByIdQuery({
    variables: { id: invoiceId },
  });
  const invoice = data?.invoice_by_pk;
  const shortId = `${invoice?.id}`.slice(0, 6).toUpperCase();
  const [markAsPaid] = useMarkAsPaidMutation();
  const [deleteInvoice, { loading: deleteLoading }] = useDeleteInvoiceMutation({
    refetchQueries: [InvoicesDocument, InvoicesTotalDocument],
    onCompleted: () => {
      navigate("/");
    },
  });
  const [editLoading, setEditLoading] = useState(false);
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
        <>
          <Card className="h-20 mb-6 animate-pulse" />
          <Card className="!p-12 h-[596px]  animate-pulse">
            <div className="h-[250px] "></div>
            <div className="bg-[#F9FAFE] dark:bg-purple-500 rounded-t-lg  h-[200px] " />
            <div className="bg-[#373B53] bg-opacity-25 dark:bg-purple-800 rounded-b-lg h-[75px] "></div>
          </Card>
        </>
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
              <DialogTrigger>
                <Button variant="secondary">Edit</Button>

                <Modal className="w-screen animate-in fade-in  duration-500 bg-black bg-opacity-50 fixed inset-0">
                  <Dialog
                    className="animate-in slide-in-from-left   duration-500 outline-none  overflow-hidden bg-white md:rounded-r-[20px] h-screen  w-screen absolute left-0 top-0 md:w-[615px] xl:w-[719px] pt-[72px] lg:pt-0 lg:pl-[103px]"
                    role="dialog"
                  >
                    {({ close }) => (
                      <div className="relative h-full">
                        <UpsertInvoice
                          editInvoice={invoice}
                          close={close}
                          setLoading={setEditLoading}
                        />
                        <div
                          className="w-full  h-48 absolute bottom-12 "
                          style={{
                            background: `linear-gradient(180deg, rgba(0, 0, 0,
                    0.0001) 0%, rgba(0, 0, 0, 0.1) 100%)`,
                          }}
                        ></div>
                        <div className="absolute bottom-0 h-[105px] z-20 flex justify-end items-center w-full  rounded-t-[20px] py-8 px-14 bg-white">
                          <Button variant="secondary" onPress={() => close()}>
                            Cancel
                          </Button>

                          <button
                            disabled={editLoading}
                            type="submit"
                            form="invoice-form"
                            className="px-6 pt-[18px] pb-[15px] text-hsv transition duration-300 rounded-full bg-purple-400 text-white hover:bg-purple-300"
                          >
                            {editLoading ? `Saving...` : "Save & Send"}
                          </button>
                        </div>
                      </div>
                    )}
                  </Dialog>
                </Modal>
              </DialogTrigger>
              <DialogTrigger>
                <Button variant="destructive">Delete</Button>
                <Modal className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
                  <Dialog className="rounded-lg bg-white max-w-md p-12 outline-none">
                    {({ close }) => (
                      <>
                        <Heading className="text-hm text-purple-800 dark:text-white">
                          Confirm Deletion
                        </Heading>
                        <p className="dark:text-gray-200 text-body my-3 text-purple-100">
                          Are you sure you want to delete invoice #{shortId}?
                          This action cannot be undone.
                        </p>
                        <div className="flex items-center justify-end gap-x-2">
                          <Button variant="secondary" onPress={close}>
                            Cancel
                          </Button>
                          <Button
                            isDisabled={deleteLoading}
                            variant="destructive"
                            onPress={() => {
                              deleteInvoice({
                                variables: {
                                  id: invoice.id,
                                },
                              });
                            }}
                          >
                            {deleteLoading ? "Deleting.." : "Delete"}
                          </Button>
                        </div>
                      </>
                    )}
                  </Dialog>
                </Modal>
              </DialogTrigger>
              <Button
                isDisabled={invoice.status === Invoice_Status_Enum.Paid}
                onPress={() => {
                  markAsPaid({
                    variables: { id: invoice.id },
                    optimisticResponse: {
                      update_invoice_by_pk: {
                        __typename: "invoice",
                        id: invoice.id,
                        status: Invoice_Status_Enum.Paid,
                      },
                    },
                  });
                }}
                variant="primary"
              >
                Mark as Paid
              </Button>
            </div>
          </Card>
          <Card className="!p-12">
            <div className="flex justify-between items-start">
              <div className="">
                <h2 className="text-purple-800 uppercase dark:text-white text-hs">
                  <span className="text-purple-100">#</span>
                  {shortId}
                </h2>
                <p className="text-purple-200 dark:text-gray-200 text-body mt-2">
                  {invoice.project_description}
                </p>
              </div>
              <ul className="dark:text-gray-200 text-purple-200 text-body text-right">
                <li>{invoice.bill_from_address?.street_address}</li>
                <li>{invoice.bill_from_address?.city}</li>
                <li>{invoice.bill_from_address?.post_code}</li>
                <li>{invoice.bill_from_address?.country}</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 mt-3">
              <section className="">
                <p className="text-purple-200 dark:text-gray-200 text-body mb-3">
                  Invoice Date
                </p>
                <p className="dark:text-white text-purple-800 text-hs">
                  {dateFormatter.format(new Date(invoice.date))}
                </p>
                <p className="text-purple-200 dark:text-gray-200 text-body mt-8 mb-3">
                  Payment Due
                </p>
                <p className="dark:text-white text-purple-800 text-hs">
                  {invoice.payment_terms &&
                    dateFormatter.format(
                      parseDate(invoice.date)
                        .add({
                          days: getPaymentTermsDays(invoice?.payment_terms),
                        })
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
                {invoice?.items?.map((item) => (
                  <li key={item.itemId} className="grid grid-cols-9">
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
                      {numberFormatter.format(item.total)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#373B53] dark:bg-purple-800 rounded-b-lg px-8 py-6 flex justify-between items-center">
              <p className="text-body text-white">Amount Due</p>
              <p className="text-hm text-white">
                {numberFormatter.format(
                  invoice?.items?.reduce((p, c) => p + c.total, 0)
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
