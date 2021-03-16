import React from 'react';

import Wrapper from './style';

function Banner({ subjectDetails }) {
  console.log(subjectDetails);
  return (
    <Wrapper>
      <div className='arrow'>
        <img src='../images/left-arrow.png' />
      </div>
      <div className='banner-title'>{subjectDetails?.subjectName}</div>
      <div className='banner-info1'>
        Chapters - {subjectDetails?.chapterCount || 0} &nbsp;&nbsp;Videos-{' '}
        {subjectDetails?.videoCount || 0}
      </div>
      <div style={{ display: 'flex' }}>
        <div className='banner-info2'>{"12"}% Learnt</div>
        <div className='banner-info2 ml-20'>{"16"}% Practiced</div>
      </div>
    </Wrapper>
  );
}

export default Banner;
