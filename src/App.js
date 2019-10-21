import React, { Component } from 'react';
//MATERIAL-UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//ROUTES
import Routes from './routes';

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
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    );
  }
}

export default App;
