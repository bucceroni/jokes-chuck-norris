import React, { Component } from 'react';
//REACT-ROUTER
import { withRouter } from 'react-router-dom';
//MATERIAL-UI
import { Grid } from '@material-ui/core';
//API
import * as api from '../api';

class Category extends Component {
  state = {
    category: []
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    const { match } = this.props;
    const data = await api.getCategory(match.params.category);
    this.setState({
      category: data
    });
  };

  render() {
    const { category } = this.state;

    return (
      <Grid>
        <span>Category</span>
        <span>{JSON.stringify(category)}</span>
        <button onClick={() => this.getData()}>Next Joke</button>
      </Grid>
    );
  }

  componentDidUpdate = prevProps => {
    const { match } = this.props;
    if (match.url !== prevProps.match.url) {
      this.getData();
    }
  };
}

export default withRouter(Category);
