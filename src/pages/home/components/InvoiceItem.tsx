import { Invoice_Status_Enum } from "../../../generated/graphql";
import InvoiceStatus from "../../../components/InvoiceStatus";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { dateFormatter, numberFormatter } from "../../../utils/formatters";

type InvoiceItemProps = {
  id: string;
  clientName: string;
  dueDate: string;
  amount: number;
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
    <Card className="grid grid-cols-3 items-center">
      <div className="col-span-2 grid grid-cols-5">
        <p className="text-purple-800 text-hsv uppercase">
          <span className="text-purple-200">#</span>
          {id.slice(0, 6)}
        </p>
        <p className="text-body text-purple-200 col-span-2">
          <span className="text-purple-100 mr-1">Due</span>
          {dateFormatter.format(new Date(dueDate))}
        </p>
        <p className="text-body text-[#858BB2] col-span-2">{clientName}</p>
      </div>
      <div className="grid grid-cols-7 items-center">
        <p className="text-purple-800 text-hs col-span-3">
          {numberFormatter.format(amount)}
        </p>
        <InvoiceStatus status={status} className="col-span-3" />
        <Link to={`/invoice/${id}`} className="flex justify-end">
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
        </Link>
      </div>
    </Card>
  );
}

export function InvoiceItemLoading() {
  return (
    <div
      style={{ boxShadow: "0px 10px 10px -10px #48549F1A" }}
      className="bg-white h-[74px] dark:bg-purple-600 rounded-lg animate-pulse"
    ></div>
  );
}
