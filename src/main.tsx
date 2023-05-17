import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { ApolloProviderWrapper } from "./lib/ApolloProvider.tsx";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <ApolloProviderWrapper>
        <RouterProvider router={router} />
      </ApolloProviderWrapper>
    </ClerkProvider>
  </React.StrictMode>
);
