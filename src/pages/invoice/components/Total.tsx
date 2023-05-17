import { numberFormatter } from "../../../utils/formatters";

export default function Total({ total }: { total: number }) {
  return (
    <div className="bg-[#373B53] dark:bg-purple-800 rounded-b-lg px-8 py-6 flex justify-between items-center">
      <p className="text-body text-white whitespace-nowrap">Amount Due</p>
      <p className="text-hm text-white">{numberFormatter.format(total)}</p>
    </div>
  );
}
