import React from 'react';

import Wrapper from './style';

function Banner(props) {
  return (
    <Wrapper>
      <div className='arrow'>
        <img src='../images/left-arrow.png' />
      </div>
      <div className='banner-title'>{props.subject}</div>
      <div className='banner-info1'>
        Chapters - {props.chapterCount} &nbsp;&nbsp;Videos- {props.videoCount}
      </div>
      <div style={{ display: 'flex' }}>
        <div className='banner-info2'>{props.learnt}% Learnt</div>
        <div className='banner-info2 ml-20'>{props.practice}% Practiced</div>
      </div>
    </Wrapper>
  );
}

export default Banner;
