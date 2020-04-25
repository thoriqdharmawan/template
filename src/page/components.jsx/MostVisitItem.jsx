import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: 200,
  },
  avatar: {
    margin: '0px auto 10px',
    width: '60px !important',
    height: '60px !important'
  },
  title: {
    fontSize: '20px',
    marginBottom: 4,
    fontWeight: '600'
  },
  subTitle: {
    fontSize: '16px',
    lineHeight: 'unset'
  }
}));

export default function MostVisitItem() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Avatar className={classes.avatar} />
      <Typography  className={classes.title}>Lorem Ipsum judul</Typography>
      <Typography className={classes.subTitle}>Lorem ipsum dolor sit amet consectetur.</Typography>
    </div>
  )
}
