import { Dialog, DialogTrigger, Heading, Modal } from "react-aria-components";
import Button from "../../../components/Button";
import {
  InvoicesDocument,
  InvoicesTotalDocument,
  useDeleteInvoiceMutation,
} from "../../../generated/graphql";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({ id }: { id: string }) {
  const navigate = useNavigate();
  const [deleteInvoice, { loading: deleteLoading }] = useDeleteInvoiceMutation({
    refetchQueries: [InvoicesDocument, InvoicesTotalDocument],
    onCompleted: () => {
      navigate("/");
    },
  });
  return (
    <DialogTrigger>
      <Button variant="destructive" className="min-w-[89px]">
        Delete
      </Button>
      <Modal className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
        <Dialog className="rounded-lg bg-white dark:bg-purple-600 max-w-xs md:max-w-md p-8 md:p-12 outline-none">
          {({ close }) => (
            <>
              <Heading className="text-hm text-purple-800 dark:text-white">
                Confirm Deletion
              </Heading>
              <p className="text-body my-3 text-purple-100">
                Are you sure you want to delete invoice #
                {`${id}`.slice(0, 6).toUpperCase()}? This action cannot be
                undone.
              </p>
              <div className="flex items-center justify-end gap-x-2">
                <Button className="!px-6" variant="secondary" onPress={close}>
                  Cancel
                </Button>
                <Button
                  isDisabled={deleteLoading}
                  className="!px-6"
                  variant="destructive"
                  onPress={() => {
                    deleteInvoice({
                      variables: {
                        id,
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
  );
}
