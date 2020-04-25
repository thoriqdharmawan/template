import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  imgWrapper: {
    width: 200,
    height: '40vh',
    backgroundColor: 'grey',
    borderRadius: 80,
    marginRight: 20 
  },
  text: {
    width: 400,
    height: '100%',
  },
  title: {
    fontSize: '42px',
    fontWeight: '600',
    marginBottom: 10
  },
  button: {
    borderRadius: 5,
    marginTop: 30,
    fontSize: 12
  }
}));


export default function HalfComponent() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgWrapper}></div>
      <div className={classes.text}>
        <Typography className={classes.title}>Test</Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ss voluptates iste provident incidunt debitis, ipsum dolores. Aut exercitationem dolorum tempore sit libero odio adipisciorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora veritatis velit dignissimos, eligendi, earum optio voluptates iste provident incidunt debitis, ipsum dolores. Aut exercitationem dolorum tempore sit libero odio adipisci.</Typography>
        <Button variant="contained" disableElevation className={classes.button}>KNOW MORE</Button>

      </div>
    </div>
  )
}
