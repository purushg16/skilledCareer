import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },

    blue: {
      "50": "#E3E7FF",
      "100": "#C0CAFF",
      "200": "#9DAFFF",
      "300": "#7A92FF",
      "400": "#5767FF",
      "500": "#4D74FF",
      "600": "#445EFF",
      "700": "#3A49FF",
      "800": "#3033FF",
      "900": "#262DFF",
    },
  },
});

export default theme;
