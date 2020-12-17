import React from 'react';
import Link from 'next/link';
import SubTopicCardWrapper from './style';

function SubTopicCard(props) {
  return (
    <Link className='link' href={`/subject/${props.chapter}/current`}>
      <SubTopicCardWrapper>
        <div class='chap-subject-card chap-box-shadow'>
          <div class='chap-subject-card-img-box'>
            <img src='https://toppscholar-upload.s3.ap-southeast-1.amazonaws.com/content-package/7491303a-9de3-48e4-a8a1-41c873460896.jpg' />
          </div>

          <div class='chap-subject-card-content-box'>
            <div class='chap-subject-card-title medium-18 line-height'>
              {props.details}
            </div>

            <div class='chap-subject-card-content-first'>
              <li class='chap-subject-card-list-style'>12 Concepts</li>
              <li>23 Videos</li>
            </div>

            <div class='chap-subject-card-content-second'>
              <li class='chap-subject-card-list-style'>
                {props.details.learn}% Learnt
              </li>
              <li class=''>{props.details.practice}% Practiced</li>
            </div>
          </div>
        </div>
      </SubTopicCardWrapper>
    </Link>
  );
}

export default SubTopicCard;
