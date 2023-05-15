import { useState } from "react";
import {
  Button,
  Item,
  ItemProps,
  Label,
  ListBox,
  Popover,
  Select,
  SelectProps,
  SelectValue,
} from "react-aria-components";
import { Text } from "react-aria-components";

interface MySelectProps<T extends object> extends SelectProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function MySelect<T extends object>({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MySelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Select {...props} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <Label className="text-bodyv text-purple-200 dark:text-gray-200 mb-2">
        {label}
      </Label>
      <Button
        className={({ isHovered, isFocused, isFocusVisible, isPressed }) => `
      flex items-center justify-between w-64 px-5 py-3 outline-none dark:bg-purple-600 bg-white  border rounded-[4px] ${
        isHovered || isFocused || isFocusVisible || isPressed || isOpen
          ? "border-purple-400 dark:border-purple-500"
          : "border-gray-200 dark:border-purple-500"
      } 
      `}
      >
        <SelectValue className="text-hsv text-purple-800 dark:text-white" />
        <svg
          className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}
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
      </Button>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      <Popover>
        <ListBox className="outline-none shadow-popover bg-white dark:bg-purple-500   rounded-lg w-64">
          {children}
        </ListBox>
      </Popover>
    </Select>
  );
}

export function MyItem(props: ItemProps) {
  return (
    <Item
      {...props}
      className={({ isFocused, isSelected }) =>
        `text-hsv  px-6 py-4 border-b outline-none transition duration-300 border-gray-200 dark:border-purple-600 last-of-type:border-none ${
          isFocused ? "text-purple-400 " : "text-purple-800 dark:text-white"
        } ${isSelected ? "text-purple-400" : ""}`
      }
    />
  );
}
