import type { Config } from "tailwindcss";
import tailwindcolors from "tailwindcss/colors";
let colors: any = tailwindcolors;
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ...colors,
        accent: "#8F8F94",
        primary: "#2c2c2c",
        card: "#f5f7fa",
        secondary: "#f9f7ef",
        info: "#0074c1",
        success: "#00BA7C",
        warning: "#ffbf43",
        error: "#ca1f26",
      },
    },
    screens: {
      xs: "0px",
      sm: "600px",
      md: "800px",
      lg: "1200px",
      xl: "1600px",
    },
  },
  extend: {},
  plugins: [],
  content: [],
};
