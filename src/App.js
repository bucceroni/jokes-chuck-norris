import React, { Component } from 'react';
import Template from './components/Template';
import * as api from './api';

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
    return <Template categoriesList={categoriesList}>Home</Template>;
  }
}

export default App;
