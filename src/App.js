import React from 'react';
import head from './images/head.png';
import body from './images/body.png';
import butt from './images/butt.png';
import styles from './styles/App.module.scss';
import classnames from 'classnames';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.drosophila}>
        <img src={head} className={classnames(styles.head, styles.bodyPart, styles.mutateHead)}></img>
        <img src={body} className={classnames(styles.body, styles.bodyPart, styles.mutateBody)}></img>
        <img src={butt} className={classnames(styles.butt, styles.bodyPart, styles.mutateButt)}></img>
      </div>
    </div>
  );
}

export default App;
