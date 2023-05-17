import Button from "../../../components/Button";
import {
  Invoice_Status_Enum,
  useMarkAsPaidMutation,
} from "../../../generated/graphql";

export default function MarkAsPaid({
  id,
  status,
}: {
  id: string;
  status: Invoice_Status_Enum;
}) {
  const [markAsPaid] = useMarkAsPaidMutation({
    variables: { id },
    optimisticResponse: {
      update_invoice_by_pk: {
        __typename: "invoice",
        id,
        status,
      },
    },
  });

  return (
    <Button
      className="w-full md:w-auto"
      isDisabled={status === Invoice_Status_Enum.Paid}
      onPress={() => {
        markAsPaid();
      }}
      variant="primary"
    >
      Mark as Paid
    </Button>
  );
}
