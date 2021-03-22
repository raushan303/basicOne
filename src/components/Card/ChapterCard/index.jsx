import React from 'react';
import TopicCardWrapper from './style';
// https://toppscholar-upload.s3.ap-southeast-1.amazonaws.com/content-package/7491303a-9de3-48e4-a8a1-41c873460896.jpg

function TopicCard({ chapterDetails }) {
  return (
    <TopicCardWrapper>
      <div class='topic-card box-shadow'>
        <div class='img-box'>
          <img src='../images/sub.jpg' />
        </div>
        <div className='topic-card-content'>
          <div class='h1 title tc-1'>{chapterDetails?.chapterName}</div>

          <div className='concepts-videos'>
            <li>{chapterDetails?.topicCount || 0} Concepts</li>
            <li>{chapterDetails?.videoCount || 0} Videos</li>
          </div>

          <div className='learnt-practiced'>
            <li>0% Learnt</li>
            <li>0% Practiced</li>
          </div>
        </div>
      </div>
    </TopicCardWrapper>
  );
}

export default TopicCard;
