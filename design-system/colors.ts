interface Colors {
  green: string;
  greenDark: string;
  blue: string;
  blueDark: string;
  red: string;
  redWarning: string;
  grey: string;
  greyLight: string;
  greyDark: string;
  greyLighter: string;
  greyLightest: string;
  black: string;
  white: string;
  yellow: string;
  yellowLight: string;
  coldWater: string;
  scale: {
    green: string[];
  };
}

export const colors: Colors = {
  green: "#00CD90",
  greenDark: "#286D59",
  blue: "#5890FF",
  blueDark: "#374056",
  red: "#D9694B",
  redWarning: "rgba(248, 90, 39, .20)",
  grey: "#898F9C",
  greyLight: "#9FA4AE",
  greyDark: "#4E5665",
  greyLighter: "#DBDBDB",
  greyLightest: "#e7eaf2",
  black: "#323232",
  white: "#ffffff",
  yellow: "#fbd281",
  yellowLight: "#fbe2bb",
  coldWater: "#064E72",
  scale: {
    green: [
      "#00cd90",
      "#11c089",
      "#1ab482",
      "#20a87b",
      "#239c74",
      "#26906d",
      "#278466",
      "#287860",
      "#286d59",
    ],
  },
};

export default colors;
