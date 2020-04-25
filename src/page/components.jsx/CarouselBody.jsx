import React, { useState } from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles(theme => ({
  navigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 3,
    top: "31vh",
    width: "100%"
  }
}));

export default function CarouselBody() {
  const classes = useStyles();
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 6,
    showNavigation: false,
    config: config.slow
  });

  const slides = [
    {
      key: 1,
      content: (
        <img
          src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          alt="1"
        />
      )
    },
    {
      key: 2,
      content: (
        <img
          src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
          alt="2"
        />
      )
    },
    {
      key: 3,
      content: (
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
          alt="3"
        />
      )
    },
    {
      key: 4,
      content: (
        <img
          src="https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
          alt="4"
        />
      )
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  console.log("slides : ", slides.length)

  const handleNext = () => {
    setState({
      ...state,
      goToSlide: state.goToSlide + 1
    })
  }

  const handleback = () => {
    setState({
      ...state,
      goToSlide: state.goToSlide - 1
    })
  }

  return (
    <div style={{ width: "60%", height: "auto", margin: "0 auto" }}>
      <div
        style={{
          width: "70%",
          height: "500px",
          margin: "auto",
          position: "relative"
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
        <div className={classes.navigation}>
          <IconButton onClick={handleNext}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton onClick={handleback}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
