import { createStitches } from '@stitches/react';


export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // The default theme to use.
  theme: {
    fonts:{
      // main: 'Poppins',
    },
    colors: {
      one: "#467898",
      two: "#467898",
      lightSecondaryHighLight:"#A9BCD0",
      DarkSecondaryHighLight:"rgba(40, 40, 50)",
      b1: "rgb(250,250,250)",
      b2: "rgb(27, 32, 48)",
      gray900: "hsl(105,5%,7%)",
      gray700: "hsl(205,5%,25%)",
      gray500: "hsl(205,5%,35%)",
      gray50: "hsl(205,5%,95%)",
      blue500: "hsl(205,90%,45%)",
      
      secondaryHighLight:"$lightSecondaryHighLight",
      buttoncolor:"$one",
      primary: "$gray900",
      secondary: "$gray700",
      tertiary: "$gray500",
      link: "$blue500",
      background: "$b2",
      antibackground: "$b1",

      border: "$gray900",
    },
    fontSizes: {
      title:"19px",
      header1:"45px",
      header2:"35px",
      p1:"16px"
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
  
    heights:{
      h1: "5rem",
      h2: "10rem",
    },
  
  },

 
  media: {
    bp0:  '(max-width: 999px)',
    bp1: '(min-width: 750px)',
    bp2: '(max-width: 759px)',
    bp3: '(min-width: 1000px)',
    bp4: '(max-width: 524px)',
    vbp1:'(min-height: 1250px)',
    bp918: '(max-width: 918px)',
    bp734: '(max-width: 733px)',
    bp450: '(max-width: 450px)',

    bp630: '(max-width: 630px)',
    bp800: '(max-width: 800px)',
    bp400: '(max-width: 400px)',
    bp140: '(max-width: 140px)',

    
    dark: "(prefers-color-scheme: dark)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});

//this is the dark theme
export const darkTheme = createTheme({
  colors: {
    secondaryHighLight:"$DarkSecondaryHighLight",
    buttoncolor: "$two",
    primary: "$gray100",
    secondary: "$gray200",
    tertiary: "$gray300",
    link: "$blue500",
    background: "$b2",
    antibackground: "$b1",
    border: "$gray100",
  },
  space: {},
  fonts: {},
});
