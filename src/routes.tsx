import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);
