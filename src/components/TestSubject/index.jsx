import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../Card/TestCard';
import Wrapper from './style';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  'clearfix:after': {
    content: '',
    display: 'table',
    clear: 'both',
  },
  trow: {
    width: '100%',
    height: '100%',
  },
  trow1: {
    width: '100%',
    height: '100%',
    marginTop: '3%',

    '&:after': {
      content: '" "',
      display: 'table',
      clear: 'both',
    },
  },
  tsub1: {
    float: 'left',
    marginLeft: '4%',
    height: '60%',
    width: '20%',
    marginTop: '6%',
  },
  tsub2: {
    float: 'left',
    marginLeft: '5%',
    height: '60%',
    width: '20%',
    marginTop: '6%',
  },
  tsub3: {
    float: 'left',
    marginLeft: '5%',
    height: '60%',
    width: '20%',
    marginTop: '6%',
  },
  tsub4: {
    float: 'left',
    marginLeft: '5%',
    height: '60%',
    width: '20%',
    marginTop: '6%',
  },
}));

function TestComponent() {
  const router = useRouter();

  const handlesubmit = (subject) => {
    router.push('/test/[subName]', `/test/${subject}`);
  };

  const styles = useStyles();

  return (
    <Wrapper>
      {' '}
      <div className={styles.trow}>
        <div className={styles.trow1}>
          <div className={styles.tsub1}>
            <Card
              handlesubmit={handlesubmit}
              sub={'Maths'}
              content={
                'Dear math, I am sick and tired of finding your "x" just accept the fact that she is gone Move On, DuDe'
              }
            />
          </div>
          <div className={styles.tsub2}>
            <Card
              handlesubmit={handlesubmit}
              sub={'Chemistry'}
              content={
                'not to get technical ... but according to chemistry, alcohol is a solution'
              }
            />
          </div>
          <div className={styles.tsub3}>
            <Card
              handlesubmit={handlesubmit}
              sub={'Biology'}
              content={
                'Biology is the study of the complex things in the Universe.'
              }
            />
          </div>
          <div className={styles.tsub4}>
            <Card
              handlesubmit={handlesubmit}
              sub={'Physics'}
              content={"i am not lazy i'm overflowing with potential energy"}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default TestComponent;
