import { DateFormatter } from "@internationalized/date";
import { NumberFormatter } from "@internationalized/number";

export const dateFormatter = new DateFormatter("en-UK", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const numberFormatter = new NumberFormatter("en-UK", {
  style: "currency",
  currency: "GBP",
});
