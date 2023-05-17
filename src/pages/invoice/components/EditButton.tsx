import { useState } from "react";
import { InvoiceType } from "../../../utils/schemas";
import { Dialog, DialogTrigger, Modal } from "react-aria-components";
import Button from "../../../components/Button";
import UpsertInvoice from "../../home/UpsertInvoice";

export default function EditButton({
  invoice,
}: {
  invoice: InvoiceType & { id: string };
}) {
  const [editLoading, setEditLoading] = useState(false);

  return (
    <DialogTrigger>
      <Button className="min-w-[73px]" variant="secondary">
        Edit
      </Button>

      <Modal className="w-screen animate-in fade-in  duration-500 bg-black bg-opacity-50 fixed inset-0">
        <Dialog
          className="animate-in slide-in-from-left   duration-500 outline-none  overflow-hidden bg-white dark:bg-purple-700 md:rounded-r-[20px] h-screen  w-screen absolute left-0 top-0 md:w-[615px] xl:w-[719px] pt-[72px] lg:pt-0 lg:pl-[103px]"
          role="dialog"
        >
          {({ close }) => (
            <div className="relative h-full">
              <UpsertInvoice
                editInvoice={invoice}
                close={close}
                setLoading={setEditLoading}
              />
              <div
                className="w-full  h-48 absolute bottom-12 "
                style={{
                  background: `linear-gradient(180deg, rgba(0, 0, 0,
                      0.0001) 0%, rgba(0, 0, 0, 0.1) 100%)`,
                }}
              ></div>
              <div className="absolute bottom-0 h-[105px] z-20 flex justify-end items-center w-full space-x-2  md:rounded-t-[20px] py-8 px-14 bg-white dark:bg-purple-700">
                <Button variant="secondary" onPress={() => close()}>
                  Cancel
                </Button>

                <button
                  disabled={editLoading}
                  type="submit"
                  form="invoice-form"
                  className="px-4 md:px-6 pt-[18px] pb-[15px] text-hsv transition duration-300 rounded-full bg-purple-400 text-white hover:bg-purple-300"
                >
                  {editLoading ? `Saving...` : "Save & Send"}
                </button>
              </div>
            </div>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
