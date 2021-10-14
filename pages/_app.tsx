import { ApolloProvider } from "@apollo/client";
import "@atlaskit/css-reset/dist/bundle.css";
import FilterProvider from "context/FilterProvider";
import { AppProps } from "next/dist/shared/lib/router/router";
import { lighten } from "polished";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useApollo } from "../src/lib/apollo";
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

export const theme = {
  primary: "#1e81b0",
  secondary: "#e28743",
  primaryText: "#21130d",
  secondaryText: "#abdbe3",
  gray: "#979f9e",
  dark: "#063970",
  light: "#eeeee4",
  lightenDark: lighten(0.2, "#063970"),
  lightenPrimary: lighten(0.1, "#1e81b0"),
  lightenSecondary: lighten(0.1, "#e28743"),
};

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <FilterProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <Component {...pageProps} />
          </React.StrictMode>
        </ThemeProvider>
      </FilterProvider>
    </ApolloProvider>
  );
}

export default App;
