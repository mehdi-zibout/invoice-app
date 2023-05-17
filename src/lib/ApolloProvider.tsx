import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { useAuth } from "@clerk/clerk-react";
import { ReactNode, useMemo } from "react";

export const ApolloProviderWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { getToken } = useAuth();

  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (_, { headers }) => {
      const token = await getToken({ template: "invoice-app" });
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    const httpLink = new HttpLink({
      uri: import.meta.env.VITE_HASURA_URI,
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),

      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              invoice: {
                keyArgs: ["where", ["status"]],
                merge(existing = [], incoming) {
                  return [...existing, ...incoming];
                },
              },
            },
          },
        },
      }),
    });
  }, [getToken]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
