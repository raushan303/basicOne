import React from 'react';
import TopicCardWrapper from './style';
// https://toppscholar-upload.s3.ap-southeast-1.amazonaws.com/content-package/7491303a-9de3-48e4-a8a1-41c873460896.jpg

function TopicCard(props) {
  return (
    <TopicCardWrapper>
      <div class='topic-card box-shadow'>
        <div class='img-box'>
          <img src='../images/sub.jpg' />
        </div>
        <div class='h1 title'>{props.details}</div>
        <div className='content1'>
          <div className='text regular14 ml-20'>12 Concepts</div>
          <div className='text regular14 ml-10'>23 Videos</div>
        </div>
        <div className='content2'>
          <div className='text regular14 ml-20'>0% Learnt</div>
          <div className='text regular14 ml-10'>0% Practiced</div>
        </div>
      </div>
    </TopicCardWrapper>
  );
}

export default TopicCard;
