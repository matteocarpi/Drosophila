import React, { useState } from 'react';
import head from './images/head.png';
import body from './images/body.png';
import butt from './images/butt.png';
import styles from './styles/App.module.scss';
import classnames from 'classnames';

function App() {
  const [mutated, setMutated] = useState(false);
  const [mutating, setMutating] = useState(false);
  return (
    <div className={styles.App}>
      <div className={styles.drosophila}>
        <img src={head} className={classnames(styles.head, styles.bodyPart, mutated && styles.mutateHead)}></img>
        <img src={body} className={classnames(styles.body, styles.bodyPart, mutated && styles.mutateBody)}></img>
        <img src={butt} className={classnames(styles.butt, styles.bodyPart, mutated && styles.mutateButt)}></img>
      </div>

      <button className={classnames(styles.mutationButtonon, mutating && styles.hide)} onClick={() => {
        setMutating(true);
        setTimeout(() => setMutating(false), 6000);
        setMutated(!mutated);
      }}>{!mutated ? 'Mutate me!' : 'Get me back to normal!'}</button>
      {console.log('mutating: ', mutating)};
    </div>
  );
}

export default App;
