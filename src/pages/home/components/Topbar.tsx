import { useState } from "react";
import Button from "../../../components/Button";
import {
  Button as AriaButton,
  Dialog,
  DialogTrigger,
  Item,
  ListBox,
  Modal,
  Popover,
  type Selection,
} from "react-aria-components";
import UpsertInvoice from "../UpsertInvoice";
import {
  Invoice_Status_Enum,
  useInvoicesTotalQuery,
} from "../../../generated/graphql";
import { ApolloError } from "@apollo/client";

type TopBarProps = {
  filterBy: Selection;
  setFilterBy: React.Dispatch<React.SetStateAction<Selection>>;
  invoicesCount?: number;
  loading: boolean;
  error?: ApolloError;
};
export default function Topbar({
  filterBy,
  setFilterBy,
  invoicesCount,
  loading,
  error,
}: TopBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [insertLoading, setInsertLoading] = useState(false);

  return (
    <section className="flex items-center justify-between">
      <div className="">
        <h1 className="text-purple-800 mb-[3px] md:mb-1.5 text-hm dark:text-white ">
          Invoices
        </h1>
        <p className="text-purple-100 text-bodyv">
          {generateInvoicesCountMessage(
            invoicesCount,
            loading,
            error,
            Array.from(filterBy) as Invoice_Status_Enum[]
          )}
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <DialogTrigger onOpenChange={(isOpen) => setIsOpen(isOpen)}>
          <AriaButton className="text-hsv text-purple-800  dark:text-white flex items-center justify-between outline-none">
            Filter<span className="hidden md:inline ml-1"> by status</span>
            <svg
              className={`transition duration-300 ml-3 ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5.2279 5.2279L9.4558 1"
                stroke="#7C5DFA"
                strokeWidth="2"
              />
            </svg>
          </AriaButton>
          <Popover>
            <ListBox
              items={[
                { id: Invoice_Status_Enum.Draft, label: "Draft" },
                { id: Invoice_Status_Enum.Pending, label: "Pending" },
                { id: Invoice_Status_Enum.Paid, label: "Paid" },
              ]}
              onSelectionChange={setFilterBy}
              defaultSelectedKeys={filterBy}
              aria-label="filter invoices"
              selectionMode="multiple"
              className="bg-white py-1.5 rounded-lg shadow-popover dark:bg-purple-500 w-48 outline-none"
            >
              {(item) => (
                <Item
                  textValue={item.label}
                  className={`px-6 py-1.5 dark:text-white text-purple-800 outline-none`}
                >
                  {({ isSelected, isHovered, isFocused }) => (
                    <div className="gap-x-3 flex items-center justify-start">
                      <div
                        className={` w-4 h-4 transition duration-300 rounded-sm border ${
                          isHovered || isFocused || isSelected
                            ? "border-purple-400"
                            : "border-gray-200 dark:border-purple-600"
                        } flex items-center justify-center
                    ${
                      isSelected
                        ? "bg-purple-400"
                        : "bg-gray-200 dark:bg-purple-600 "
                    }
                    `}
                      >
                        {isSelected && (
                          <svg
                            width="10"
                            height="9"
                            viewBox="0 0 10 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832"
                              stroke="white"
                              strokeWidth="2"
                            />
                          </svg>
                        )}
                      </div>
                      {item.label}
                    </div>
                  )}
                </Item>
              )}
            </ListBox>
          </Popover>
        </DialogTrigger>
        <DialogTrigger>
          <Button
            variant="primary"
            className="!pl-1.5 !pr-3 !py-1.5 flex items-center"
          >
            <div
              aria-hidden="true"
              className="rounded-full mr-2 lg:mr-4  flex justify-center items-center w-8 h-8 bg-white text-purple-400"
            >
              <svg
                className="ml-0.5 "
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.31311 10.0234V6.3136H10.0229V3.73327H6.31311V0.0234375H3.73278V3.73327H0.0229492V6.3136H3.73278V10.0234H6.31311Z"
                  fill="#7C5DFA"
                />
              </svg>
            </div>
            New
            <span className="hidden md:inline-block ml-1">Invoice</span>
          </Button>
          <Modal className="w-screen animate-in fade-in  duration-500 bg-black bg-opacity-50 fixed inset-0">
            <Dialog
              className="animate-in slide-in-from-left   duration-500 outline-none  overflow-hidden bg-white dark:bg-purple-700 md:rounded-r-[20px] h-screen  w-screen absolute left-0 top-0 md:w-[615px] xl:w-[719px] pt-[72px] lg:pt-0 lg:pl-[103px]"
              role="dialog"
            >
              {({ close }) => (
                <div className="relative h-full">
                  <UpsertInvoice setLoading={setInsertLoading} close={close} />
                  <div
                    className="w-full  h-48 absolute bottom-12 "
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0,
                    0.0001) 0%, rgba(0, 0, 0, 0.1) 100%)`,
                    }}
                  ></div>
                  <div className="absolute bottom-0 h-[105px] z-20 flex justify-between items-center w-full  rounded-t-[20px] py-8 px-14 bg-white dark:bg-purple-700">
                    <Button variant="secondary" onPress={() => close()}>
                      Discard
                    </Button>
                    <div className="space-x-2">
                      <button
                        disabled={insertLoading}
                        className="
                        text-purple-100 bg-[#373B53] dark:text-gray-200 dark:bg-[#373B53]
                      hover:text-purple-100 hover:bg-purple-800 hover:dark:text-gray-200 hover:dark:bg-purple-600
                        px-6 pt-[18px] pb-[15px] text-hsv transition duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        form="draft-form"
                      >
                        Save as Draft
                      </button>

                      <button
                        disabled={insertLoading}
                        type="submit"
                        form="invoice-form"
                        className="px-6 pt-[18px] pb-[15px] text-hsv transition duration-300 rounded-full bg-purple-400 text-white hover:bg-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Save & Send
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Dialog>
          </Modal>
        </DialogTrigger>
      </div>
    </section>
  );
}

function generateInvoicesCountMessage(
  count: number | undefined,
  loading: boolean,
  error: ApolloError | undefined,
  statuses: Invoice_Status_Enum[]
): string {
  if (loading) return "Calculating number of invoices..";
  if (error)
    return "Failed to calculate number of invoices, please try again later.";
  if (statuses.length === 0) return "Please pick a status";
  if (statuses.length === 1) {
    if (statuses[0] === Invoice_Status_Enum.Draft) {
      return `There are ${count} draft invoices`;
    }
    if (statuses[0] === Invoice_Status_Enum.Paid) {
      return `There are ${count} paid invoices`;
    }
    if (statuses[0] === Invoice_Status_Enum.Pending) {
      return `There are ${count} pending invoices`;
    }
  }
  if (statuses.length === 2) {
    return `There are ${count}  invoices`;
  }
  return `There are ${count} total  invoices`;
}
