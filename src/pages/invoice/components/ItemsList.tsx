import { Item_FieldsFragment } from "../../../generated/graphql";
import { numberFormatter } from "../../../utils/formatters";

export function ItemsListMobile({ items }: { items: Item_FieldsFragment[] }) {
  return (
    <ul className="space-y-6 md:hidden bg-[#F9FAFE] dark:bg-purple-500 rounded-t-lg pt-8 px-8 pb-10 ">
      {items?.map((item) => (
        <li key={item.itemId} className="flex justify-between items-center">
          <div className="">
            <p className="dark:text-white text-purple-800 text-hsv ">
              {item.name}
            </p>
            <p className="dark:text-purple-100 text-purple-200 text-hsv mt-2">
              {item.quantity} x {numberFormatter.format(item.price)}
            </p>
          </div>
          <p className="dark:text-white text-purple-800 text-hsv text-right">
            {numberFormatter.format(item.total)}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function ItemsList({ items }: { items: Item_FieldsFragment[] }) {
  return (
    <div className="hidden md:grid bg-[#F9FAFE] dark:bg-purple-500 rounded-t-lg pt-8 px-8 pb-10 grid-cols-9 mt-12">
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
        {items?.map((item) => (
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
  );
}
