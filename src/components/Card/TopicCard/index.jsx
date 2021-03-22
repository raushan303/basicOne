import React from 'react';
import Link from 'next/link';
import SubTopicCardWrapper from './style';

function SubTopicCard({ topicDetails }) {
  return (
    <Link
      className='link'
      href={`/subject/${topicDetails?.chapterId}-${topicDetails?.chapterName}/${topicDetails?.topicId}-${topicDetails?.topicName}`}
    >
      <SubTopicCardWrapper>
        <div className='sub-topic-card box-shadow'>
          <div className='img-box'>
            <img src={'https://web.toppscholars.com/assets/chapter-place-1.png'} />
          </div>

          <div className='sub-topic-card-content'>
            <div className='title tc-1'>{topicDetails?.topicName}</div>

            <div className='concepts-videos'>
              <li>{topicDetails?.conceptCount} Concepts</li>
              <li>{topicDetails?.videoCount} Videos</li>
            </div>

            <div className='learnt-practiced'>
              <li>2% Learnt</li>
              <li>4% Practiced</li>
            </div>
          </div>
        </div>
      </SubTopicCardWrapper>
    </Link>
  );
}

export default SubTopicCard;
