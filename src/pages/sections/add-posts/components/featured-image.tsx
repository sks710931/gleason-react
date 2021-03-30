import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

export const FeaturedImage = () => {
  const classes:any = useStyles();
  return (
    <div >
      <h3>Featured Image</h3>
      <div className={classes.featuredImageSection}>
        <div className={classes.imgContainer}>

        </div>
        <button className="btn">Select Image</button>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({palette}: Theme) => ({
  featuredImageSection:{
    display: "flex",
    flexDirection: "row",
    justifyContent:'flex-start',
  },
  imgContainer:{
    height: 200,
    width: 350,
    backgroundColor: palette.grey[300],
    marginRight: 20,
    border: '3px solid #709ef5',
    borderRadius: 8,
  }
}));