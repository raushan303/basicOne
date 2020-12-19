import React from 'react';
import Link from 'next/link';
import SubTopicCardWrapper from './style';

function SubTopicCard(props) {
  return (
    <Link className='link' href={`/subject/${props.chapter}/current`}>
      <SubTopicCardWrapper>
        <div className='sub-topic-card box-shadow'>
          <div className='img-box'>
            <img src='https://web.toppscholars.com/assets/chapter-place-1.png' />
          </div>

          <div className='sub-topic-card-content'>
            <div className='title'>{props.details}</div>

            <div className='concepts-videos'>
              <li>12 Concepts</li>
              <li>23 Videos</li>
            </div>

            <div className='learnt-practiced'>
              <li>{props.details.learn}% Learnt</li>
              <li>{props.details.practice}% Practiced</li>
            </div>
          </div>
        </div>
      </SubTopicCardWrapper>
    </Link>
  );
}

export default SubTopicCard;
