import React from 'react';
//MATERIAL-UI
import { Button, Grid, Typography } from '@material-ui/core';
//MOMENT
import moment from 'moment';

const styles = {
  spacing: {
    marginTop: '15px'
  }
};

const CategoryDetails = props => {
  const { item, nextItem } = props;

  return item && typeof item !== 'string' ? (
    <Grid container direction="column" justify="center" alignItems="center">
      <img src={item.icon_url} alt="chucknorris" />
      <Typography align="center" variant="h4">
        Category {item.categories}
      </Typography>
      <Typography align="center" variant="h5" style={styles.spacing}>
        "{item.value}"
      </Typography>
      <Typography align="center" variant="caption" style={styles.spacing}>
        Created at:{moment(item.created_at).format('LLL')}
      </Typography>
      <Typography align="center" variant="caption">
        Updated at:{moment(item.updated_at).format('LLL')}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => nextItem()}
        style={styles.spacing}
      >
        Next Joke
      </Button>
    </Grid>
  ) : (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography align="center" variant="h4">
        {item}
      </Typography>
    </Grid>
  );
};

export default CategoryDetails;
