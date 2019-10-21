import React, { Component } from 'react';
//MATERIAL-UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
//COMPONENTS
import Template from './components/Template';
//API
import * as api from './api';

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
      <ThemeProvider theme={theme}>
        <Template categoriesList={categoriesList}>
          <Typography>Home</Typography>
          <Typography>Typography</Typography>
        </Template>
      </ThemeProvider>
    );
  }
}

export default App;
