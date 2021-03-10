import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Row, Col, Select, Form, Input, Tag, InputNumber, Upload, Button, message } from 'antd';
import { connect } from 'react-redux';
import { addVideo, getVideoId } from '../../../redux/action/addVideo';
import { getSubjects, getChapters, getTopics } from '../../../redux/action/getCoursesData';

import VideoCard from '../VideoCard';

const { Option } = Select;

const data = ['Grade', 'Subject', 'Chapter', 'Topic'];

function index({
  addVideo,
  getVideoId,
  videoId,
  addVideoResponse,
  getSubjects,
  getChapters,
  getTopics,
  getSubjectsResponse,
  getChaptersResponse,
  getTopicsResponse,
}) {
  const [addMode, setAddMode] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    Grade: null,
    Subject: null,
    Chapter: null,
    Topic: null,
    Title: null,
    VideoLink: null,
    VideoTime: null,
    Note: null,
    Image: null,
    AddField: null,
  });
  const [searchDetails, setSearchDetails] = useState({
    Grade: null,
    Subject: null,
    Chapter: null,
    Topic: null,
  });
  const [addState, setAddState] = useState({ Grade: 0, Subject: 0, Chapter: 0, Topic: 0 });
  const [selectList, setSelectList] = useState({
    Grade: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'],
    Subject: [],
    Chapter: [],
    Topic: [],
  });

  // useEffect(() => {
  //   console.log(videoDetails);
  // }, [videoDetails]);

  const handleSelectChange = (field, type = '') => (val, child) => {
    if (type === 'search')
      setSearchDetails((prevState) => ({
        ...prevState,
        [field]: val,
      }));
    else
      setVideoDetails((prevState) => ({
        ...prevState,
        [field]: val,
      }));
  };

  const handleAddChange = (field) => {
    let formatAddState = { ...addState };
    data.forEach((str) => {
      formatAddState[str] = 0;
    });
    formatAddState[field] = 1;
    setAddState(formatAddState);
  };

  const handleInputChange = (field) => (e) => {
    setVideoDetails((prevState) => ({
      ...prevState,
      [field]: field === 'VideoTime' ? e : e.target.value,
    }));
  };

  const handleAddSelectValue = (field) => {
    // console.log('field');
    if (!videoDetails.AddField) {
      message.error('Enter the value');
      return;
    }
    setSelectList((prevState) => ({
      ...prevState,
      [field]: [...prevState[field], videoDetails.AddField],
    }));
    setVideoDetails((prevState) => ({
      ...prevState,
      AddField: null,
    }));
  };

  const handleAddVideo = () => {
    const formatData = {
      grade: videoDetails.Grade,
      subjectName: videoDetails.Subject,
      chapterName: videoDetails.Chapter,
      topicName: videoDetails.Topic,
      subtopicName: videoDetails.Title,
      url: videoDetails.VideoLink,
      videoMins: videoDetails.VideoTime,
      note: videoDetails.Note,
    };
    addVideo(formatData);
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
        <div>
          <Row>
            {data.map((str, index) => {
              let isDisbaled = false;
              data.forEach((str2, index2) => {
                if (index2 < index && !videoDetails[str2]) isDisbaled = true;
              });
              return (
                <div className='select-container'>
                  <Select
                    disabled={isDisbaled}
                    placeholder={`Select ${str}`}
                    onChange={handleSelectChange(str)}
                    value={videoDetails[str]}
                  >
                    {selectList[str].length ? (
                      selectList[str].map((val) => <Option value={val}>{val}</Option>)
                    ) : (
                      <Option value={null}>Add an option</Option>
                    )}
                  </Select>
                  <div
                    className='add'
                    onClick={() => {
                      if (!isDisbaled) handleAddChange(str);
                    }}
                  >
                    +
                  </div>
                </div>
              );
            })}
          </Row>
          {data.map((str) => {
            if (addState[str]) {
              return (
                <Row className='add-field-container'>
                  <Col className='add-field' style={{ width: '100px' }}>
                    Add&nbsp;{str}
                  </Col>
                  <Col className='add-field' style={{ maxWidth: '360px' }}>
                    <Input value={videoDetails.AddField} onChange={handleInputChange('AddField')} />
                  </Col>
                  <Col className='add-field' style={{ width: '80px' }}>
                    <Button onClick={() => handleAddSelectValue(str)}>Add</Button>
                  </Col>
                </Row>
              );
            }
          })}
          <Row className='form-container' style={{ alignItems: 'center' }}>
            <div className='video-form-container'>
              <Form>
                {data.map((str) => (
                  <Form.Item label={str}>
                    <Tag color='#108ee9'>
                      {videoDetails[str] ? videoDetails[str] : `Select ${str}`}
                    </Tag>
                  </Form.Item>
                ))}

                <Form.Item label='Title'>
                  <Input onChange={handleInputChange('Title')} />
                </Form.Item>
                <Form.Item label='Video Link'>
                  <Input onChange={handleInputChange('VideoLink')} />
                </Form.Item>
                <Form.Item label='Video Time'>
                  <InputNumber onChange={handleInputChange('VideoTime')} />
                </Form.Item>
                <Form.Item label='Note'>
                  <Input.TextArea onChange={handleInputChange('Note')} />
                </Form.Item>
                <Form.Item label='Image'>
                  <Upload>
                    <Button>Upload</Button>
                  </Upload>
                </Form.Item>
              </Form>
            </div>
            <div className='upload-container'>
              <Button
                style={{ height: '100px', width: '100px', fontWeight: 500, borderRadius: '12px' }}
                onClick={handleAddVideo}
              >
                Upload
              </Button>
            </div>
          </Row>
        </div>
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
                    onChange={handleSelectChange(str, 'search')}
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
