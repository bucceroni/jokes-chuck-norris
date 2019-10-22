import React, { Component } from 'react';
//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';
//REACT-ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//CONTAINERS
import Home from './containers/Home';
import Category from './containers/Category';
import NotFound from './containers/NotFound';
//COMPONENTS
import Template from './components/Template';

class Routes extends Component {
  componentDidMount = async () => {
    const { actions } = this.props;
    actions.getCategoriesList();
  };

  render() {
    const { categoriesList } = this.props;
    return (
      <Router>
        <Template categoriesList={categoriesList}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:category" component={Category} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Template>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoriesList: state.reducer.categoriesList
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
