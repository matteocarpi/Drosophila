import React from 'react';
import head from './images/head.png';
import body from './images/body.png';
import butt from './images/butt.png';
import styles from './styles/App.module.scss';


function App() {
  return (
    <div className="App">
      <div className={styles.drosophila}>
        <img src={head} className={styles.head}></img>
        <img src={body} className={styles.body}></img>
        <img src={butt} className={styles.butt}></img>
      </div>
    </div>
  );
}

export default App;
