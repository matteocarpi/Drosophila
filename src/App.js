import React, { useState } from 'react';
import head from './images/head.png';
import mutatedHeadImg from './images/head-mutated.png';
import body from './images/body.png';
import butt from './images/butt.png';
import styles from './styles/App.module.scss';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';

function App() {
  const [mutated, setMutated] = useState(false);
  const [unMutated, setUnMutated] = useState(false);
  const [mutatedHead, setMutatedHead] = useState(false);
  const [mutating, setMutating] = useState(false);

  const mutate = () => {
    setMutating(true);
    setTimeout(() => {
      setMutating(false);
      setMutatedHead(true);
    }, 3000,
    );
    setMutated(true);
    setUnMutated(false);
  };

  const unMutate = () => {
    setMutating(true);
    setTimeout(() => {
      setMutating(false);
      setMutatedHead(false);
    }, 3000,
    );
    setMutated(false);
    setUnMutated(true);
  };

  return (
    <div className={styles.App}>
      <Helmet>
        <title>{mutated ? 'HeadButt Drosophila' : 'Drosophila'}</title>
      </Helmet>
      <div className={styles.title}>
        <h1 className={classnames(mutatedHead && styles.thugTitle, !mutatedHead && styles.hide)}>HeadButt</h1>
        <h2 className={styles.normalTitle}>Drosophila</h2>
      </div>
      <div className={styles.drosophila}>
        <img alt="head" src={!mutatedHead ? head : mutatedHeadImg} className={classnames(styles.head, styles.bodyPart, mutated && styles.mutateHead, unMutated && styles.unMutateHead)}></img>
        <img alt="body" src={body} className={classnames(styles.body, styles.bodyPart, mutated && styles.mutateBody, unMutated && styles.unMutateBody)}></img>
        <img alt="butt" src={butt} className={classnames(styles.butt, styles.bodyPart, mutated && styles.mutateButt, unMutated && styles.unMutateButt)}></img>
      </div>

      <button className={classnames(styles.mutationButton, mutating && styles.hide)} onClick={
        mutated === false
          ? () => mutate()
          : () => unMutate()
      }>
        {
          mutated === false
            ? 'Mutate me!'
            : 'Get me back to normal!'
        }
      </button>

      {console.log('mutating: ', mutating)}
    </div>
  );
}

export default App;
