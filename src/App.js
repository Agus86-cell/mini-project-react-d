import { ChakraProvider } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const client = new ApolloClient({
  uri: "https://glowing-fish-47.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "qvhdG759VoWKmeVaer9AewRbpz3eLTbtg7pxwFg8tuISsaRwwQ3a601694ZpDHt4",
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
