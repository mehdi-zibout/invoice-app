import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: import.meta.env.VITE_HASURA_URI,
  headers: {
    "x-hasura-admin-secret": import.meta.env.VITE_HASURA_KEY,
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);