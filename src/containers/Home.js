import React from 'react';
import img_chucknorris from '../assets/chucknorris.png';

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
      <img src={img_chucknorris} alt="chucknorris" />
      <span style={styles.imageText}>
        Here are the best "jokes" about the one and only, Chuck Norris !
      </span>
    </div>
  );
};

export default Home;
