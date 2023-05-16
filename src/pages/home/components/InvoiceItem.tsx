import { Invoice_Status_Enum } from "../../../generated/graphql";

type InvoiceItemProps = {
  id: string;
  clientName: string;
  dueDate: string;
  amount: string;
  status: Invoice_Status_Enum;
};
export default function InvoiceItem({
  amount,
  clientName,
  dueDate,
  status,
  id,
}: InvoiceItemProps) {
  return (
    <div
      style={{ boxShadow: "0px 10px 10px -10px #48549F1A" }}
      className="bg-white dark:bg-purple-600 rounded-lg px-8 py-4 grid grid-cols-3 items-center"
    >
      <div className="col-span-2 grid grid-cols-5">
        <p className="text-purple-800 text-hsv">
          <span className="text-purple-200">#</span>
          {id}
        </p>
        <p className="text-body text-purple-200 col-span-2">
          <span className="text-purple-100 mr-1">Due</span>
          {dueDate}
        </p>
        <p className="text-body text-[#858BB2] col-span-2">{clientName}</p>
      </div>
      <div className="grid grid-cols-7 items-center">
        <p className="text-purple-800 text-hs col-span-3">{amount}</p>
        <InvoiceStatus status={status} className="col-span-3" />
        <button className="flex justify-end">
          <svg
            aria-hidden="true"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L1 9" stroke="#7C5DFA" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
function InvoiceStatus({
  className,
  status,
}: {
  status: Invoice_Status_Enum;
  className?: string;
}) {
  return (
    <div
      className={`${className}  ${getStatusStyles(
        status
      )} bg-opacity-5 rounded-md  pt-[14px] pb-[11px] flex items-center justify-center `}
    >
      <div
        className={`rounded-full w-2 h-2  ${getStatusStyles(status)} mr-2`}
      ></div>
      <p className="text-hsv text-center mt-0.5">{getStatusLabel(status)}</p>
    </div>
  );
}

function getStatusStyles(status: Invoice_Status_Enum): string {
  switch (status) {
    case Invoice_Status_Enum.Draft:
      return "bg-[#373B53] text-[#373B53]";
    case Invoice_Status_Enum.Paid:
      return "bg-[#33D69F] text-[#33D69F]";
    case Invoice_Status_Enum.Pending:
      return "bg-[#FF8F00] text-[#FF8F00]";
  }
}
function getStatusLabel(status: Invoice_Status_Enum): string {
  switch (status) {
    case Invoice_Status_Enum.Draft:
      return "Draft";
    case Invoice_Status_Enum.Paid:
      return "Paid";
    case Invoice_Status_Enum.Pending:
      return "Pending";
  }
}
