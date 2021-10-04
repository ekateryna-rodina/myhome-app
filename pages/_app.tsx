import { ApolloProvider, gql } from "@apollo/client";
import "@atlaskit/css-reset/dist/bundle.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import React, { createContext, useState } from "react";
import { useApollo } from "src/apollo";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}

body{
  background-color:#fff;
  min-height:100vh;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  font-size: 100%;
}

`;

const theme = {
  primary: "#1e81b0",
  secondary: "#e28743",
  primaryText: "#21130d",
  secondaryText: "#abdbe3",
  gray: "#979f9e",
  dark: "#063970",
  light: "#eeeee4",
};
const PPOPERTIES = gql`
  query Properties {
    properties {
      id
      city
      country
      title
      beds
      baths
      size
      photo
    }
  }
`;
const initialContext: { filters: any } = {
  filters: {},
};
export const Context = createContext(initialContext);
function App({ Component, pageProps }: AppProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Context.Provider
        value={{
          filters: {
            isOpen: isFilterOpen,
            setIsOpen: setIsFilterOpen,
          },
        }}
      >
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <Component {...pageProps} />
          </React.StrictMode>
        </ThemeProvider>
      </Context.Provider>
    </ApolloProvider>
  );
}

export default App;
