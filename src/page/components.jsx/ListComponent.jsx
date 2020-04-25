import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  rootWrapper: {
    display: 'flex',
    padding: '0px 0px 0px 50px',
    marginBottom: 22,
    borderLeft: '1px solid black',
    width: '40%',
    alignItems: 'center'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  wrapperList: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 28
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 24
  },
  textWrapper :{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30
  },
  title: {
    fontSize: 26,
    marginBottom: 4
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 'unset'
  }
}));


export default function ListComponent() {
  const classes = useStyles();
  return (
    <div className={classes.rootWrapper}>
    <div className={classes.root}>
      <div className={classes.wrapperList}>
        <div className={classes.avatarWrapper}></div>
        <div className={classes.textWrapper}>
          <Typography className={classes.title}>Lorem Ipsum</Typography>
          <Typography className={classes.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium!</Typography>
        </div>
      </div>
      <div className={classes.wrapperList}>
        <div className={classes.avatarWrapper}></div>
        <div className={classes.textWrapper}>
          <Typography className={classes.title}>Lorem Ipsum</Typography>
          <Typography className={classes.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium!</Typography>
        </div>
      </div>
      <div className={classes.wrapperList}>
        <div className={classes.avatarWrapper}></div>
        <div className={classes.textWrapper}>
          <Typography className={classes.title}>Lorem Ipsum</Typography>
          <Typography className={classes.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium!</Typography>
        </div>
      </div>
      <div className={classes.wrapperList}>
        <div className={classes.avatarWrapper}></div>
        <div className={classes.textWrapper}>
          <Typography className={classes.title}>Lorem Ipsum</Typography>
          <Typography className={classes.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium!</Typography>
        </div>
      </div>
    </div>
    </div>
  )
}
