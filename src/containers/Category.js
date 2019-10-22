import React, { Component } from 'react';
//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
//REACT-ROUTER
import { withRouter } from 'react-router-dom';
//MATERIAL-UI
import { Grid } from '@material-ui/core';
//COMPONENTS
import CategoryDetails from '../components/CategoryDetails';

class Category extends Component {
  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    const { actions, match } = this.props;
    actions.getCategoryItem(match.params.category);
  };

  render() {
    const { categoryItem } = this.props;

    return (
      <Grid>
        <CategoryDetails item={categoryItem} nextItem={this.getData} />
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

const mapStateToProps = state => {
  return {
    categoryItem: state.reducer.categoryItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category)
);
