import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import Slider from 'react-slick';

import { Row, Col, message } from 'antd';

import SubjectWrapper from './style';

import { SUBJECTS, PHYSICS } from '../../shared/subjects';
import { getSubjects } from '../../redux/action/getCoursesData';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src='./images/slider-left-arrow.png'
      className={className}
      style={{
        ...style,
        display: 'block',
        height: '40px',
        width: '40px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src='./images/slider-right-arrow.png'
      className={className}
      style={{ ...style, display: 'block', height: '40px', width: '40px' }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Subject({ userDetails, getSubjects, getSubjectsData }) {
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    if (userDetails.userId !== null) {
      getSubjects(userDetails.grade);
    }
  }, []);

  useEffect(() => {
    if (getSubjectsData.response) {
      const response = getSubjectsData?.data?.data;
      console.log(response);
      if (response?.success && !getSubjectsData?.error) {
        setSubjectList(response?.data);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [getSubjectsData]);

  return (
    <SubjectWrapper>
      <Row className='image-container'>
        <Col xs={22} sm={20} md={11} lg={10} xl={9}>
          <img className='sub-header-img-first' src='./images/undraw_professor.svg' />
        </Col>
        <Col xs={22} sm={20} md={11} lg={10} xl={9}>
          <img className='sub-header-img-second' src='./images/undraw_board.svg' />
        </Col>
      </Row>
      <div className='subject-title'>Explore by subjects</div>

      <Row className='subject-card-container'>
        {subjectList?.map((subject) => {
          return (
            <Link href={`/subject/${subject.subjectId}-${subject.subjectName}`}>
              <Col xs={22} sm={20} md={12} lg={6} xl={6} style={{ padding: '20px 25px' }}>
                <div
                  className='subject-card'
                  id={`sub${subject.subjectId}`}
                  key={subject.subjectId}
                >
                  {subject.subjectName}
                </div>
              </Col>
            </Link>
          );
        })}
      </Row>
      <div className='chapter-card-container'>
        <Slider {...settings}>
          {PHYSICS.map((chapter) => {
            return (
              <div className='chapter-card'>
                <img src='./images/sub.jpg'></img>
                <div className='chapter-name tc-1'>{chapter.name}</div>
                <div className='chapter-card-content'>
                  {chapter.learn}% Learnt &nbsp; &nbsp;
                  {chapter.practice}% Practiced
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </SubjectWrapper>
  );
}

function mapStateToProps(state) {
  return {
    getSubjectsData: state.courses.getSubjects,
    userDetails: state.userDetails.userDetails.data,
  };
}

export default connect(mapStateToProps, {
  getSubjects,
})(Subject);
