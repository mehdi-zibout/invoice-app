import { createBrowserRouter } from "react-router-dom";

import InvoiceDetails from "./pages/invoice";
import Root from "./pages";
import Homepage from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/invoice/:invoiceId", element: <InvoiceDetails /> },
    ],
  },
  // { path: ":invoiceId", element: <InvoiceDetails /> },
]);
