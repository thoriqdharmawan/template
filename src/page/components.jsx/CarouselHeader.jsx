import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { autoPlay } from "react-swipeable-views-utils";
import { MobileStepper } from "@material-ui/core";
import MostVisitItem from "./MostVisitItem";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  imgWrapper: {
    height: "75vh",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    height: "auto",
    display: "block",
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
  },
  navigationCarousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-30px',
    zIndex: 2,
    position: 'relative',
    backgroundColor: 'transparent'
  },
  mostVisit: {
    minHeight: '25vh',
    maxWidth: '90vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    overflow: 'hidden',
    boxSizing: 'border-box',
    padding: '0px 0px',
    margin: 'auto'
  }
}));

export default function CarouselHeader() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = step => {
    setActiveStep(step);
  };
  return (
    <>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className={classes.imgWrapper}>
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={tutorialSteps.length}
        position="static"
        activeStep={activeStep}
        className={classes.navigationCarousel}
      />
      <div className={classes.mostVisit}>
        <MostVisitItem />
        <MostVisitItem />
        <MostVisitItem />
        <MostVisitItem />
        <MostVisitItem />
      </div>
    </>
  );
}
