import React from 'react';
//REACT-ROUTER
import { Link } from 'react-router-dom';
//MATERIAL-UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  textCapitalize: {
    textTransform: 'capitalize'
  }
};

const CategoriesList = props => {
  const getLink = item => `/${item}`;

  return (
    <List>
      {props.categories.map((item, index) => (
        <ListItem key={index} button to={getLink(item)} component={Link}>
          <ListItemText>
            <b style={styles.textCapitalize}>{item}</b>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;
