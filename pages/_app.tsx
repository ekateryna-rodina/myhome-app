import "@atlaskit/css-reset/dist/bundle.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { IMediaQuery } from "../types/media";
const GlobalStyle = createGlobalStyle<{ fontSize: string }>`
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
  font-size: ${({ fontSize }) => fontSize}
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

const initialContext = {
  breakpoints: {} as IMediaQuery,
  filters: {},
};
export const Context = createContext(initialContext);
function MyApp({ Component, pageProps }: AppProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isSmallMobile = useMediaQuery({
    query: "(max-width: 320px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px) and (max-width: 1200px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 768px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const isBigDesktop = useMediaQuery({
    query: "(min-width: 1201px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const mediaMap: IMediaQuery = {
    isSmallMobile,
    isMobile,
    isDesktop,
    isBigDesktop,
    isLaptop,
    isTablet,
    isPortrait,
    isRetina,
  };

  const fontSize = () => {
    if (mediaMap["isSmallMobile"]) return "60%";
    if (mediaMap["isMobile"]) return "65%";
    if (mediaMap["isTablet"]) return "75%";
    if (mediaMap["isLaptop"]) return "85%";
    if (mediaMap["isBigDesktop"]) return "90%";
    return "100%";
  };
  return (
    <Context.Provider
      value={{
        breakpoints: mediaMap,
        filters: {
          isOpen: isFilterOpen,
          setIsOpen: setIsFilterOpen,
        },
      }}
    >
      <GlobalStyle fontSize={fontSize()} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Context.Provider>
  );
}
export default MyApp;
