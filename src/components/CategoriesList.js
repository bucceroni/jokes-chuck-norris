import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  textCapitalize: {
    textTransform: 'capitalize'
  }
};

const CategoriesList = props => {
  return (
    <List>
      {props.categories.map((item, index) => (
        <ListItem button key={index}>
          <ListItemText style={styles.textCapitalize} primary={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;
