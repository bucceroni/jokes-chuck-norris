import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import * as api from "../../api";

class CategoryList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    const data = api.getCategories();
    console.log(data)
    this.setState({
      list: data
    });
  }

  render() {
    const { list } = this.state;
    return (
      <List>
        {list.length > 0 &&
          list.map((item, index) => (
            <ListItem button key={index}>
              <ListItem primary={item.value} />
            </ListItem>
          ))}
      </List>
    );
  }
}

export default CategoryList;
