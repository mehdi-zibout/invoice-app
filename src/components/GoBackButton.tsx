import { Button as AriaButton } from "react-aria-components";
import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <AriaButton
      onPress={() => navigate(-1)}
      className="text-purple-800 dark:text-white dark:hover:text-purple-100 hover:text-purple-100 text-hsv mb-8 transition duration-300 group"
    >
      <svg
        width="6"
        height="11"
        viewBox="0 0 6 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-5 inline-block"
      >
        <path
          d="M4.3418 0.886047L0.113895 5.11395L4.3418 9.34185"
          className="stroke-purple-400  group-hover:stroke-purple-300 transition duration-300"
          strokeWidth="2"
        />
      </svg>
      Go back
    </AriaButton>
  );
}
