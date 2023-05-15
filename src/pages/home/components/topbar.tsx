import { useState } from "react";
import Button from "../../../components/Button";
import {
  Button as AriaButton,
  Dialog,
  DialogTrigger,
  Item,
  Label,
  ListBox,
  Modal,
  Popover,
  Select,
  SelectValue,
  ToggleButton,
} from "react-aria-components";
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
          <Modal
            isDismissable
            className="bg-white md:rounded-r-[20px]  w-screen h-screen overflow-y-auto  absolute left-0 top-0 md:w-[615px] xl:w-[719px] mt-[72px] lg:mt-0 lg:ml-[103px]"
          >
            <Dialog className="outline-none " role="dialog">
              {({ close }) => <>TODO</>}
            </Dialog>
          </Modal>
        </DialogTrigger>
      </div>
    </section>
  );
}
