import { forwardRef } from "react";
import { Button as AriaButton, type ButtonProps } from "react-aria-components";

type VariantType = "primary" | "secondary" | "tertiary" | "destructive";
interface CustomButtonProps extends ButtonProps {
  variant: VariantType;
}
const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <AriaButton
        {...props}
        className={({
          isFocused,
          isHovered,
          isDisabled,
          isFocusVisible,
          isPressed,
        }) =>
          `${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          } px-4 md:px-6 pt-[18px] pb-[15px] text-hsv transition duration-300 rounded-full ${
            isFocused || isHovered
              ? getBackgroundColor(variant)[1]
              : getBackgroundColor(variant)[0]
          } ${
            className
              ? typeof className === "string"
                ? className
                : className({
                    isFocused,
                    isHovered,
                    isDisabled,
                    isFocusVisible,
                    isPressed,
                  })
              : ""
          }`
        }
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

function getBackgroundColor(variant: VariantType): [string, string] {
  switch (variant) {
    case "primary":
      return ["bg-purple-400 text-white", "bg-purple-300 text-white"];
    case "secondary":
      return [
        "bg-[#F9FAFE] text-purple-200 dark:bg-purple-500 dark:text-white",
        "text-purple-200 bg-[#DFE3FA] dark:text-purple-200 dark:bg-white",
      ];
    case "destructive":
      return ["bg-red-200 text-white", "bg-red-100 text-white"];
    case "tertiary":
      return [
        "text-purple-100 bg-[#373B53] dark:text-gray-200 dark:bg-[#373B53]",
        "text-purple-100 bg-purple-800 dark:text-gray-200 dark:bg-purple-600",
      ];
  }
}

export default Button;
