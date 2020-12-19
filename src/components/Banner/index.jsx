import React from 'react';

import Wrapper from './style';

function Banner(props) {
  return (
    <Wrapper>
      <div className='arrow'>
        <img src='../images/left-arrow.png' />
      </div>
      <div className='h1'>{props.subject}</div>
      <div className='h2'>
        Chapters - {props.chapterCount} &nbsp;&nbsp;Videos- {props.videoCount}
      </div>
      <div style={{ display: 'flex' }}>
        <div className='h3'>{props.learnt}% Learnt</div>
        <div className='h3 ml-20'>{props.practice}% Practiced</div>
      </div>
    </Wrapper>
  );
}

export default Banner;
