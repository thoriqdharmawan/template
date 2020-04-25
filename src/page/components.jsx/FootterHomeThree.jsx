import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '10vh',
    paddingTop: 30,
    boxSizing: 'border-box',
    backgroundColor: 'grey'
  }
}));

export default function FootterHomeThree() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
    </div>
  )
}
