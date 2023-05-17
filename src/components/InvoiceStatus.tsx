import { Invoice_Status_Enum } from "../generated/graphql";

export default function InvoiceStatus({
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
