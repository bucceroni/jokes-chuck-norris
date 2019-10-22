import React from 'react';
//MATERIAL-UI
import { Grid, Typography } from '@material-ui/core';
//ASSETS
import img_chucknorris from '../images/chucknorris.png';

const Home = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <img src={img_chucknorris} alt="chucknorris" />
      <Typography>
        Here are the best "jokes" about the one and only, Chuck Norris !
      </Typography>
    </Grid>
  );
};

export default Home;
