export type QueryType =
  | "mobileXS"
  | "mobileS"
  | "mobileM"
  | "mobileL"
  | "tablet"
  | "laptop"
  | "laptopL"
  | "desktop"
  | "mobile"
  | "laptopAndDesktop";

export const mediaQueries: Record<QueryType, string> = {
  mobileXS: "(max-width: 320px)",
  mobileS: "(min-width: 321px) and (max-width: 374px)",
  mobileM: "(min-width: 375px) and (max-width: 424px)",
  mobileL: "(min-width: 425px) and (max-width: 767px)",
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  laptopAndDesktop: "(min-width: 1024px)",
  laptop: "(min-width: 1024px) and (max-width: 1439px)",
  laptopL: "(min-width: 1440px) and (max-width: 2559px)",
  desktop: "(min-width: 2560px)",
};
