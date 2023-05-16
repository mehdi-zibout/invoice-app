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
} from "react-aria-components";
import UpsertInvoice from "../UpsertInvoice";
export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex items-center justify-between">
      <div className="">
        <h1 className="text-purple-800 mb-[3px] md:mb-1.5 text-hm dark:text-white ">
          Invoices
        </h1>
        <p className="text-purple-100 text-bodyv">No invoices</p>
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
              aria-label="filter invoices"
              selectionMode="multiple"
              className="bg-white py-1.5 rounded-lg shadow-popover dark:bg-purple-500 w-48 outline-none"
            >
              <Item
                aria-label="draft"
                textValue="DRAFT"
                className={`px-6 py-1.5 dark:text-white text-purple-800 outline-none`}
              >
                {({ isSelected, isHovered, isFocused }) => (
                  <div className="gap-x-3 flex items-center justify-start">
                    <div
                      className={` w-4 h-4 transition duration-300 rounded-sm border ${
                        isHovered || isFocused
                          ? "border-purple-400"
                          : "border-gray-200"
                      } flex items-center justify-center
                    ${isSelected ? "bg-purple-400" : "bg-gray-200 "}
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
                    Draft
                  </div>
                )}
              </Item>
              <Item
                aria-label="pending"
                textValue="PENDING"
                className={`px-6 py-1.5 dark:text-white text-purple-800 outline-none`}
              >
                {({ isSelected, isHovered, isFocused }) => (
                  <div className="gap-x-3 flex items-center justify-start">
                    <div
                      className={` w-4 h-4 transition duration-300 rounded-sm border ${
                        isHovered || isFocused
                          ? "border-purple-400"
                          : "border-gray-200"
                      } flex items-center justify-center
                    ${isSelected ? "bg-purple-400" : "bg-gray-200 "}
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
                    Pending
                  </div>
                )}
              </Item>
              <Item
                textValue="PAID"
                aria-label="paid"
                className={`px-6 py-1.5 dark:text-white text-purple-800 outline-none`}
              >
                {({ isSelected, isHovered, isFocused }) => (
                  <div className="gap-x-3 flex items-center justify-start">
                    <div
                      className={` w-4 h-4 transition duration-300 rounded-sm border ${
                        isHovered || isFocused
                          ? "border-purple-400"
                          : "border-gray-200"
                      } flex items-center justify-center
                    ${isSelected ? "bg-purple-400" : "bg-gray-200 "}
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
                    Paid
                  </div>
                )}
              </Item>
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
              className="rounded-full mr-2  flex justify-center items-center w-8 h-8 bg-white text-purple-400"
            >
              <svg
                className="ml-0.5"
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
          </Button>
          <Modal className="w-screen  bg-black bg-opacity-50 absolute inset-0">
            <Dialog
              className="outline-none  overflow-hidden bg-white md:rounded-r-[20px] h-screen  w-screen absolute left-0 top-0 md:w-[615px] xl:w-[719px] pt-[72px] lg:pt-0 lg:pl-[103px]"
              role="dialog"
            >
              {({ close }) => (
                <div className="relative h-full">
                  <UpsertInvoice />
                  <div
                    className="w-full  h-48 absolute bottom-12 "
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0,
                    0.0001) 0%, rgba(0, 0, 0, 0.1) 100%)`,
                    }}
                  ></div>
                  <div className="absolute bottom-0 h-[105px] z-20 flex justify-between items-center w-full  rounded-t-[20px] py-8 px-14 bg-white">
                    <Button variant="secondary" onPress={() => close()}>
                      Discard
                    </Button>
                    <div className="space-x-2">
                      <Button variant="tertiary">Save as Draft</Button>

                      <button
                        type="submit"
                        form="invoice-form"
                        className="px-6 pt-[18px] pb-[15px] text-hsv transition duration-300 rounded-full bg-purple-400 text-white hover:bg-purple-300"
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
