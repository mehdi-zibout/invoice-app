import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hiddenLabel?: boolean;
  error?: string;
  containerClassname?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassname,
      type,
      label,
      hiddenLabel,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={containerClassname}>
        <div
          className={`flex ${
            hiddenLabel ? "sr-only" : ""
          } justify-between items-center mb-2`}
        >
          <label
            className={`text-bodyv ${
              error
                ? "text-red-200"
                : "text-purple-200 dark:text-gray-200  whitespace-nowrap"
            }
            
            `}
          >
            {label}
          </label>
          <p className="text-bodyv text-red-200 text-[10px]  line-clamp-1 ">
            {error}
          </p>
        </div>
        <input
          type={type}
          className={`${className} text-purple-800 text-hsv dark:text-white placeholder:text-purple-800 placeholder:text-hsv dark:placeholder:text-white px-5 py-3 outline-none dark:bg-purple-600 bg-white  border rounded-[4px] ${
            error
              ? "border-red-200"
              : "border-gray-200 dark:border-purple-500 active:border-purple-300 hover:border-purple-300 dark:hover:border-purple-300 dark:focus-within:border-purple-300 focus-within:border-purple-300"
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
