import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Row, Col, Select, Form, Input, Tag, InputNumber, Upload, Button, message } from 'antd';
import { connect } from 'react-redux';
import { addVideo, getVideoId } from '../../../redux/action/addVideo';
import { getSubjects, getChapters, getTopics } from '../../../redux/action/getCoursesData';

import VideoCard from '../VideoCard';

import UploadVideo from './uploadVideo';

const { Option } = Select;

const data = ['Grade', 'Subject', 'Chapter', 'Topic'];

function index({}) {
  const [addMode, setAddMode] = useState(false);
  const [searchDetails, setSearchDetails] = useState({
    Grade: null,
    Subject: null,
    Chapter: null,
    Topic: null,
  });

  const [selectList, setSelectList] = useState({
    Grade: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'],
    Subject: [],
    Chapter: [],
    Topic: [],
  });

  const handleSelectChange = (field) => (val, child) => {
    setSearchDetails((prevState) => ({
      ...prevState,
      [field]: val,
    }));
  };

  return (
    <Wrapper>
      <Row
        style={{ justifyContent: 'flex-end', cursor: 'pointer' }}
        onClick={() => setAddMode((prevState) => !prevState)}
      >
        Add Video
      </Row>
      {addMode ? (
        <UploadVideo />
      ) : (
        <>
          <Row>
            {data.map((str, index) => {
              let isDisbaled = false;
              data.forEach((str2, index2) => {
                if (index2 < index && !searchDetails[str2]) isDisbaled = true;
              });
              return (
                <div className='select-container'>
                  <Select
                    disabled={isDisbaled}
                    placeholder={`Select ${str}`}
                    onChange={handleSelectChange(str)}
                    value={searchDetails[str]}
                  >
                    {selectList[str].map((val) => (
                      <Option value={val}>{val}</Option>
                    ))}
                  </Select>
                </div>
              );
            })}
          </Row>
          <Row className='mt-10'>
            <VideoCard img='/images/undraw8.svg' />
            <VideoCard img='/images/undraw1.svg' />
            <VideoCard img='/images/img1.png' />
            <VideoCard img='/images/undraw_dashboard.svg' />
            <VideoCard img='/images/undraw2.svg' />
            <VideoCard img='/images/undraw9.svg' />
          </Row>
        </>
      )}
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    addVideoResponse: state.addVideo.addVideoData,
    videoId: state.addVideo.getVideoId,
    getSubjectsResponse: state.courses.getSubjects,
    getChaptersResponse: state.courses.getChapters,
    getTopicsResponse: state.courses.getTopics,
  };
};

export default connect(mapStateToProps, {
  addVideo,
  getVideoId,
  getSubjects,
  getChapters,
  getTopics,
})(index);
