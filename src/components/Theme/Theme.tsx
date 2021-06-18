import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);

export const theme = {
  navBarStyles: {
    light: {
      backgroundPage: "white",
      colorPage: "black",
      backgroundColor: "rgba(0,0,0,0.60)",
      backgroundOnHoverItem: "rgba(255,255,255,0.33)",
      boxShadowNavBar: "0 8px 17px rgba(0, 0, 0, 0.45)",
      color: "whitesmoke",
    },
    dark: {
      backgroundPage: "black",
      colorPage: "white",
      backgroundColor: "#000000c0",
      backgroundOnHoverItem: "rgba(255,255,255,0.33)",
      boxShadowNavBar: "0 8px 17px rgba(0, 0, 0, 0.15)",
      color: "white",
    },
  },
  logoStyles: {
    fontFamilyLogo: "'Dancing Script', cursive",
    fontSizeLogo: "1.5em",
  },
};

export type NavBarStyles = keyof typeof theme.navBarStyles;
export type LogoStyles = typeof theme.logoStyles;
interface Props {
  children: React.ReactNode;
}

export default function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
