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
      colorsecondary: "black",
      backgroundFooter: "rgba(0,0,0,0.33)",
    },
    dark: {
      backgroundPage: "black",
      colorPage: "white",
      backgroundColor: "#000000c0",
      backgroundOnHoverItem: "rgba(255,255,255,0.33)",
      backgroundFooter: "rgba(255,255,255,0.33)",

      boxShadowNavBar: "0 8px 17px rgba(0, 0, 0, 0.15)",
      color: "white",
      colorsecondary: "whitesmoke",
    },
  },
  logoStyles: {
    fontFamilyLogo: "'Dancing Script', cursive",
    fontSizeLogo: "1.5em",
  },

  avatarSizes: {
    small: "3em",
    medium: "5em",
    large: "7em",
  },

  calculatorThemes: {
    themeA: {
      backgroundColorScreen: "#e7ffff",
      backgroundColorCalculator: "#006fff",
      borderRadius: "10%",
    },
    themeB: {
      backgroundColorScreen: "#ffff56",
      backgroundColorCalculator: "#f400a1",
      borderRadius: "100%",
    },
    themeC: {
      backgroundColorScreen: "#f7f7f7",
      backgroundColorCalculator: "#cb2821",
      borderRadius: "none",
    },
  },
  gameTheme: {
    backgroundColor: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
    fontFamily: "'Barlow Semi Condensed', sans-serif;",
    darkText: "hsl(229, 25%, 31%)", //grey
    scoreText: "hsl(229, 64%, 46%)", //blue
  },
};

export type NavBarStyles = keyof typeof theme.navBarStyles;
export type LogoStyles = typeof theme.logoStyles;
export type AvatarSizes = keyof typeof theme.avatarSizes;
export type CalculatorThemes = keyof typeof theme.calculatorThemes;
export type GameTheme = keyof typeof theme.gameTheme;

interface Props {
  children: React.ReactNode;
}

export default function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
