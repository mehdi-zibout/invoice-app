import { Payment_Terms_Enum } from "../generated/graphql";

export default function getPaymentTermsDays(
  paymentTerms: Payment_Terms_Enum
): number {
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
