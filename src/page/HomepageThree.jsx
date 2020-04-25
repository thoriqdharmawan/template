import React from "react";
import CarouselBody from "./components.jsx/CarouselBody";
import { makeStyles } from "@material-ui/core/styles";
import ListComponent from "./components.jsx/ListComponent";
import FootterHomeThree from "./components.jsx/FootterHomeThree";

const useStyles = makeStyles(theme => ({
  rootWrapper: {
    height: '100vh',
    width: '100%',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '90vh',
    paddingTop: 30,
    boxSizing: 'border-box'
  }
}));

export default function HomepageThree() {
  const classes = useStyles();
  return (
    <div className={classes.rootWrapper}>
      <div className={classes.root}>
        <CarouselBody />
        <ListComponent />
      </div>
      <FootterHomeThree />
    </div>
  );
}
