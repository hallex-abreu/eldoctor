import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://sa-east-1.cdn.hygraph.com/content/clfkfe7xw0tch01uh5htlawgi/master",
  cache: new InMemoryCache(),
});

export default client;
