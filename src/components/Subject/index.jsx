import React from 'react';

import { SUBJECTS, PHYSICS } from '../../shared/subjects';
import Link from 'next/link';
import SubjectWrapper from './style';

let left = 0;

function Subject() {
  

  const slideleft = () => {
    if (left > -330*10) {
      left -= 1000;
      var tmp = left + 'px';
      document.getElementsByClassName(
        'chapter-card-inner-container'
      )[0].style.marginLeft = tmp;
    }
  };

  const slideright = () => {
    if (left < 0) {
      left += 1000;
      let tmp = left + 'px';
      document.getElementsByClassName(
        'chapter-card-inner-container'
      )[0].style.marginLeft = tmp;
    }
  };

  return (
    <SubjectWrapper>
      <div className='image-container'>
        <img
          className='sub-header-img-first'
          src='./images/undraw_professor.svg'
        />
        <img
          className='sub-header-img-second'
          src='./images/undraw_board.svg'
        />
      </div>
      <div className='subject-title'>Explore by subjects</div>

      <div className='subject-card-container'>
        {SUBJECTS.map((subject) => {
          return (
            <Link href={`/subject/${subject.name}`}>
              <div className='subject-card' id={subject.id} key={subject.id}>
                {subject.name}
              </div>
            </Link>
          );
        })}
      </div>

      <div className='chapter-card-container'>
        <div className='chapter-card-inner-container scroll-list'>
          {PHYSICS.map((chapter) => {
            if (chapter.name.length > 25)
              chapter.name = chapter.name.substring(0, 22) + '...';

            return (
              <div className='chapter-card'>
                <img src='./images/sub.jpg'></img>
                <div className='chapter-name'>{chapter.name}</div>
                <div className='chapter-card-content'>
                  {chapter.learn}% Learnt &nbsp;
                  {chapter.practice}% Practiced
                </div>
              </div>
            );
          })}
        </div>

        <button className='sub-left-slider' onClick={slideright}>
          <img src='./images/garrow1.png'></img>
        </button>
        <button className='sub-right-slider' onClick={slideleft}>
          <img src='./images/garrow.png'></img>
        </button>
      </div>
    </SubjectWrapper>
  );
}

export default Subject;
