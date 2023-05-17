import { ReactComponent as NoInvoices } from "../../../assets/no-invoices.svg";

export default function InvoiceDetailsError() {
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-10">
        <NoInvoices className="md:mb-16 mb-10" />
        <h2 className="dark:text-white text-purple-800 text-hm mb-6">
          There is nothing here
        </h2>
        <p className="text-purple-100 dark:text-gray-200 max-w-[176px] text-center text-bodyv">
          Please make sure that you're on the right page or try again later
        </p>
      </div>
    </>
  );
}
