import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as AriaDatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  CalendarGridBody,
} from "react-aria-components";

import React from "react";
export default function DatePicker(
  props: React.ComponentProps<typeof AriaDatePicker>
) {
  return (
    <AriaDatePicker {...props}>
      <Label className="text-bodyv text-purple-200 dark:text-gray-200 mb-2">
        Date
      </Label>
      <Group
        className={({ isHovered, isFocusVisible }) => `
       flex items-center justify-between w-64 px-5 py-3 outline-none  border rounded-[4px] bg-white dark:bg-purple-600 ${
         isHovered || isFocusVisible
           ? "border-purple-400 dark:border-purple-500"
           : "border-gray-200 dark:border-purple-500"
       } 
       `}
      >
        <DateInput className="flex">
          {(segment) => (
            <DateSegment
              className="text-hsv text-purple-800 dark:text-white mx-0.5"
              segment={segment}
            />
          )}
        </DateInput>
        <Button>
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3334 2H14C15.1027 2 16 2.89734 16 4V14C16 15.1027 15.1027 16 14 16H2C0.897339 16 0 15.1027 0 14V4C0 2.89734 0.897339 2 2 2H2.66663V0.666626C2.66663 0.298706 2.96533 0 3.33337 0H4C4.36804 0 4.66663 0.298706 4.66663 0.666626V2H11.3334V0.666626C11.3334 0.298706 11.632 0 12 0H12.6666C13.0347 0 13.3334 0.298706 13.3334 0.666626V2ZM14 14.6666C14.3673 14.6666 14.6666 14.3673 14.6666 14V6.69336H1.33337V14C1.33337 14.3673 1.63269 14.6666 2 14.6666H14Z"
              fill="#7E88C3"
            />
          </svg>
        </Button>
      </Group>
      <Popover>
        <Dialog>
          <Calendar className="shadow-popover bg-white dark:bg-purple-500 py-7 px-5 w-64 rounded-lg">
            <header className="flex items-center justify-between mb-8">
              <Button slot="previous">
                <svg
                  aria-hidden="true"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.3418 0.88623L0.113895 5.11413L4.3418 9.34203"
                    stroke="#7C5DFA"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
              <Heading className="text-hsv text-purple-800 dark:text-gray-200 mx-0.5" />
              <Button slot="next">
                <svg
                  aria-hidden="true"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.11377 0.88623L5.34167 5.11413L1.11377 9.34203"
                    stroke="#7C5DFA"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
            </header>
            <CalendarGrid className="-ml-3 outline-none">
              <CalendarGridBody>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className={({
                      isFocusVisible,
                      isHovered,
                      isFocused,
                      isPressed,
                      isSelected,
                      isDisabled,
                    }) =>
                      `text-center outline-none transition duration-300 text-hsv p-2 ${
                        isFocusVisible ||
                        isHovered ||
                        isFocused ||
                        isPressed ||
                        isSelected
                          ? "text-purple-400"
                          : "text-purple-800 dark:text-gray-200"
                      }
                      ${isDisabled ? "opacity-[8%]" : ""}
                      `
                    }
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
}
