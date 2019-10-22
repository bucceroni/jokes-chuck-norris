import React, { Component } from 'react';
//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';
//REACT-ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//MATERIAL-UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//COMPONENTS
import Template from './components/Template';
//CONTAINERS
import Home from './containers/Home';
import Category from './containers/Category';
import NotFound from './containers/NotFound';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Courier New',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#e64a19'
    },
    secondary: {
      main: '#ffffff'
    }
  }
});
class App extends Component {
  componentDidMount = async () => {
    const { actions } = this.props;
    actions.getCategoriesList();
  };

  render() {
    const { categoriesList } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Template categoriesList={categoriesList}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:category" component={Category} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Template>
        </Router>
      </ThemeProvider>
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
)(App);
