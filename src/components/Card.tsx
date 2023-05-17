import { forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={`
      bg-white dark:bg-purple-600 rounded-lg px-8 py-4 
        ${className}
      `}
      style={{ ...style, boxShadow: "0px 10px 10px -10px #48549F1A" }}
      {...props}
    />
  )
);
Card.displayName = "Card";

export default Card;
