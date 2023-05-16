import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div>
        <div className="flex justify-between items-center ">
          <label
            className={` text-bodyv ${
              error ? "text-red-200" : "text-purple-200 dark:text-gray-200"
            } mb-2`}
          >
            {label}
          </label>
          <p className="text-bodyv text-red-200 text-[10px]">{error}</p>
        </div>
        <input
          type={type}
          className={`${className}  px-5 py-3 outline-none dark:bg-purple-600 bg-white  border rounded-[4px] ${
            error
              ? "border-red-200"
              : "border-gray-200 dark:border-purple-500 active:border-purple-300 hover:border-purple-300 focus-within:border-purple-300"
          }`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
