import React from 'react';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageText: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

const CategoryDetails = props => {
  const { item, onClick } = props;
  return (
    <div style={styles.root}>
      <span style={styles.imageText}>Category {item.categories}</span>
      <img src={item.icon_url} alt="chucknorris" />
      <span style={styles.imageText}>{item.value}</span>
      <span style={styles.imageText}>Created at:{item.created_at}</span>
      <span style={styles.imageText}>Updated at:{item.updated_at}</span>
      <button onClick={() => onClick()}>Next Joke</button>
    </div>
  );
};

export default CategoryDetails;
