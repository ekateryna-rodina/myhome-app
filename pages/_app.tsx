import "@atlaskit/css-reset/dist/bundle.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  height: 100%;
}

body{
  background-color:#fff;
  min-height:100vh;
  font-family: 'Roboto', sans-serif;
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
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
