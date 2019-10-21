import React, { Component } from 'react';
//REACT-ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//CONTAINERS
import Home from './containers/Home';
import CategoryDetails from './containers/CategoryDetails';
import NotFound from './containers/NotFound';
//COMPONENTS
import Template from './components/Template';
//API
import * as api from './api';

class Routes extends Component {
  state = {
    categoriesList: []
  };
  componentDidMount = async () => {
    const data = await api.getCategories();
    this.setState({
      categoriesList: data
    });
  };

  render() {
    const { categoriesList } = this.state;
    return (
      <Router>
        <Template categoriesList={categoriesList}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:category" component={CategoryDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Template>
      </Router>
    );
  }
}

export default Routes;
