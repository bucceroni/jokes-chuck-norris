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

const Home = () => {
  return (
    <div style={styles.root}>
      <span style={styles.imageText}>Not Found</span>
    </div>
  );
};

export default Home;
