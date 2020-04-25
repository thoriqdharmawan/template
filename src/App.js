import React from "react";
import {
  MuiThemeProvider,
  ThemeProvider
} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import Homepage from "./page/Homepage";
import HomePageTwo from "./page/HomePageTwo";
import HomepageThree from "./page/HomepageThree";

const theme = createMuiTheme({
  font: "muli",
  borderColor: "rgb(204, 204, 204)",
  palette: {
    primary: {
      main: "#014a62"
    },
    secondary: {
      main: "#039be5"
    },
    white: {
      main: "#fff"
    }
  },
  typography: {
    fontFamily: ["muli"],
    button: {
      textTransform: "capitalize"
    },
    h6: {
      fontWeight: 700
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Homepage />
        <HomePageTwo />
        <HomepageThree />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
