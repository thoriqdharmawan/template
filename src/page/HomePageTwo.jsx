import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import HalfComponent from './components.jsx/HalfComponent';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    padding: '0px 0px'
  },
  top: {
    height: '50vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    boxSizing: 'border-box',
    padding: 30,
  },
  bottom: {
    height: '50vh',
    backgroundColor: 'grey',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 70,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 30,
    width: 550,
    lineHeight: 'unset',
    marginBottom: 40
  },
  button: {
    fontSize: '18px',
    borderRadius: 10
  }
}));

export default function HomePageTwo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <HalfComponent />
        <HalfComponent />
      </div>
      <div className={classes.bottom}>
        <Typography className={classes.title}>Lorem ipsum</Typography>
        <Typography className={classes.subTitle}>Lorem ipsum dolor sit amet consectetur icing elit. Dolores, cupiditate?</Typography>
        <Button disableElevation variant="contained" className={classes.button}>LEARN MORE</Button>
      </div>
    </div>
  )
}
