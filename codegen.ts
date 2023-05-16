const config = {
  schema: [
    {
      "": {
        headers: {
          "x-hasura-admin-secret": "",
        },
      },
    },
  ],
  documents: ["./src/**/*.graphql", "./src/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
