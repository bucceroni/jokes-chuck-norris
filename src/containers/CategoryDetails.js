import React, { Component } from 'react';
//MATERIAL-UI
import { Grid } from '@material-ui/core';
//API
import * as api from '../api';

class CategoryDetails extends Component {
  state = {
    categoryDetails: []
  };

  componentDidMount = async () => {
    const { match } = this.props;
    // console.log(this.props)
    const data = await api.getCategoryDetails(match.params.category);
    this.setState({
      categoryDetails: data
    });
  };

  render() {
    const { categoryDetails } = this.state;

    return (
      <Grid>
        <span>Category Details</span>
        <span>{JSON.stringify(categoryDetails)}</span>
      </Grid>
    );
  }
}

export default CategoryDetails;
