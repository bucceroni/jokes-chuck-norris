import React, { Component } from 'react';
//REACT-ROUTER
import { withRouter } from 'react-router-dom';
//MATERIAL-UI
import { Grid } from '@material-ui/core';
//COMPONENTS
import CategoryDetails from '../components/CategoryDetails';
//API
import * as api from '../api';

class Category extends Component {
  state = {
    item: []
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    const { match } = this.props;
    const data = await api.getCategory(match.params.category);
    this.setState({
      item: data
    });
  };

  render() {
    const { item } = this.state;

    return (
      <Grid>
        <CategoryDetails item={item} onClick={this.getData} />
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
