import React, { useEffect, useState } from 'react';
import { Row, Col, Select, Form, Input, Tag, InputNumber, Upload, Button, message } from 'antd';
import { connect } from 'react-redux';
import { addVideo } from '../../../redux/action/addVideo';
import { getSubjects, getChapters, getTopics } from '../../../redux/action/getCoursesData';

const { Option } = Select;

const data = [
  { listName: 'Grade', idName: 'gradeId', fieldName: 'grade' },
  { listName: 'Subject', idName: 'subjectId', fieldName: 'subjectName' },
  { listName: 'Chapter', idName: 'chapterId', fieldName: 'chapterName' },
  { listName: 'Topic', idName: 'topicId', fieldName: 'topicName' },
];

const GradeArray = [
  { grade: '1st', gradeId: null },
  { grade: '2nd', gradeId: null },
  { grade: '3rd', gradeId: null },
  { grade: '4th', gradeId: null },
  { grade: '5th', gradeId: null },
  { grade: '6th', gradeId: null },
  { grade: '7th', gradeId: null },
  { grade: '8th', gradeId: null },
  { grade: '9th', gradeId: null },
  { grade: '10th', gradeId: null },
];

function index({
  addVideo,
  addVideoResponse,
  getSubjects,
  getChapters,
  getTopics,
  getSubjectsResponse,
  getChaptersResponse,
  getTopicsResponse,
}) {
  const [videoDetails, setVideoDetails] = useState({
    Grade: null,
    Subject: null,
    subjectId: null,
    Chapter: null,
    chapterId: null,
    Topic: null,
    topicId: null,
    Title: null,
    VideoLink: null,
    VideoTime: null,
    Note: null,
    Image: null,
    AddField: null,
  });
  const [addState, setAddState] = useState({ Grade: 0, Subject: 0, Chapter: 0, Topic: 0 });
  const [selectList, setSelectList] = useState({
    Grade: GradeArray,
    Subject: [],
    Chapter: [],
    Topic: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (videoDetails.Grade) getSubjects(videoDetails.Grade);
  }, [videoDetails.Grade]);

  useEffect(() => {
    if (getSubjectsResponse.response) {
      const response = getSubjectsResponse?.data?.data;
      if (response?.success && !getSubjectsResponse?.error) {
        setSelectList((prevState) => ({
          ...prevState,
          Subject: response.data,
          Chapter: [],
          Topic: [],
        }));
        setVideoDetails((prevState) => ({
          ...prevState,
          Subject: null,
          subjectId: null,
          Chapter: null,
          chapterId: null,
          Topic: null,
          topicId: null,
        }));
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [getSubjectsResponse]);

  useEffect(() => {
    setVideoDetails((prevState) => ({
      ...prevState,
      Chapter: null,
      chapterId: null,
      Topic: null,
      topicId: null,
    }));
    if (videoDetails.subjectId !== null) getChapters(videoDetails.subjectId);
    else {
      setSelectList((prevState) => ({ ...prevState, Chapter: [], Topic: [] }));
    }
  }, [videoDetails.subjectId]);

  useEffect(() => {
    if (getChaptersResponse.response) {
      const response = getChaptersResponse?.data?.data;
      if (response?.success && !getChaptersResponse?.error) {
        setSelectList((prevState) => ({ ...prevState, Chapter: response.data, Topic: [] }));
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [getChaptersResponse]);

  useEffect(() => {
    setVideoDetails((prevState) => ({
      ...prevState,
      Topic: null,
      topicId: null,
    }));
    if (videoDetails.chapterId !== null) getTopics(videoDetails.chapterId);
    else {
      setSelectList((prevState) => ({ ...prevState, Topic: [] }));
    }
  }, [videoDetails.chapterId]);

  useEffect(() => {
    if (getTopicsResponse.response) {
      const response = getTopicsResponse?.data?.data;
      if (response?.success && !getTopicsResponse?.error) {
        setSelectList((prevState) => ({ ...prevState, Topic: response.data }));
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [getTopicsResponse]);

  const handleSelectChange = (listName, idName, fieldName) => (val, child) => {
    setVideoDetails((prevState) => ({
      ...prevState,
      [listName]: val,
      [idName]: child.id,
    }));
  };

  const handleAddChange = (field) => {
    let formatAddState = { ...addState };
    data.forEach((obj) => {
      formatAddState[obj.listName] = 0;
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

  const handleAddSelectValue = (listName, idName, fieldName) => {
    if (!videoDetails.AddField) {
      message.error('Enter the value');
      return;
    }
    setSelectList((prevState) => ({
      ...prevState,
      [listName]: [...prevState[listName], { [fieldName]: videoDetails.AddField, [idName]: null }],
    }));
    setVideoDetails((prevState) => ({
      ...prevState,
      AddField: null,
    }));
    setAddState((prevState) => ({ ...prevState, [listName]: 0 }));
  };

  const handleAddVideo = () => {
    if (
      !videoDetails.Grade ||
      !videoDetails.Subject ||
      !videoDetails.Chapter ||
      !videoDetails.Topic ||
      !videoDetails.Title ||
      !videoDetails.VideoLink ||
      !videoDetails.VideoTime
    ) {
      message.error('fill the all field!');
      return;
    }
    const formatData = {
      grade: videoDetails.Grade,
      subjectName: videoDetails.Subject,
      subjectId: videoDetails.subjectId,
      chapterName: videoDetails.Chapter,
      chapterId: videoDetails.chapterId,
      topicName: videoDetails.Topic,
      topicId: videoDetails.topicId,
      subtopicName: videoDetails.Title,
      url: videoDetails.VideoLink,
      videoMins: videoDetails.VideoTime,
      note: videoDetails.Note,
    };
    setLoading(true);
    addVideo(formatData);
  };

  useEffect(() => {
    if (addVideoResponse.response) {
      const response = addVideoResponse?.data?.data;
      if (response?.success && !addVideoResponse?.error) {
        setLoading(false);
        setVideoDetails((prevState) => ({
          ...prevState,
          Grade: null,
          Subject: null,
          subjectId: null,
          Chapter: null,
          chapterId: null,
          Topic: null,
          topicId: null,
          Title: null,
          VideoLink: null,
          VideoTime: null,
          Note: null,
          Image: null,
          AddField: null,
        }));
        setSelectList((prevState) => ({
          ...prevState,
          Subject: [],
          Chapter: [],
          Topic: [],
        }));
        message.success('Successfully added');
      } else {
        setLoading(false);
        message.error('some error occured try again!');
      }
    }
  }, [addVideoResponse]);

  return (
    <div>
      <Row>
        {data.map((obj, index) => {
          let isDisbaled = false;
          data.forEach((obj2, index2) => {
            if (index2 < index && !videoDetails[obj2.listName]) isDisbaled = true;
          });
          return (
            <div className='select-container'>
              <Select
                disabled={isDisbaled}
                placeholder={`Select ${obj.listName}`}
                onChange={handleSelectChange(obj.listName, obj.idName, obj.fieldName)}
                value={videoDetails[obj.listName]}
              >
                {selectList[obj.listName].length ? (
                  selectList[obj.listName].map((obj2) => (
                    <Option value={obj2[obj.fieldName]} id={obj2[obj.idName]}>
                      {obj2[obj.fieldName]}
                    </Option>
                  ))
                ) : (
                  <Option value={null}>Add an option</Option>
                )}
              </Select>
              <div
                className='add'
                onClick={() => {
                  if (!isDisbaled) handleAddChange(obj.listName);
                }}
              >
                +
              </div>
            </div>
          );
        })}
      </Row>
      {data.map((obj) => {
        if (addState[obj.listName]) {
          return (
            <Row className='add-field-container'>
              <Col className='add-field' style={{ width: '100px' }}>
                Add&nbsp;{obj.listName}
              </Col>
              <Col className='add-field' style={{ maxWidth: '360px' }}>
                <Input value={videoDetails.AddField} onChange={handleInputChange('AddField')} />
              </Col>
              <Col className='add-field' style={{ width: '80px' }}>
                <Button
                  onClick={() => handleAddSelectValue(obj.listName, obj.idName, obj.fieldName)}
                >
                  Add
                </Button>
              </Col>
            </Row>
          );
        }
      })}
      <Row className='form-container' style={{ alignItems: 'center' }}>
        <div className='video-form-container'>
          <Form>
            {data.map((obj) => (
              <Form.Item label={obj.listName}>
                <Tag color='#108ee9'>
                  {videoDetails[obj.listName]
                    ? videoDetails[obj.listName]
                    : `Select ${obj.listName}`}
                </Tag>
              </Form.Item>
            ))}

            <Form.Item label='Title'>
              <Input value={videoDetails.Title} onChange={handleInputChange('Title')} />
            </Form.Item>
            <Form.Item label='Video Link'>
              <Input value={videoDetails.VideoLink} onChange={handleInputChange('VideoLink')} />
            </Form.Item>
            <Form.Item label='Video Time'>
              <InputNumber
                value={videoDetails.VideoTime}
                onChange={handleInputChange('VideoTime')}
              />
            </Form.Item>
            <Form.Item label='Note'>
              <Input.TextArea value={videoDetails.Note} onChange={handleInputChange('Note')} />
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
            loading={loading}
          >
            Upload
          </Button>
        </div>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    addVideoResponse: state.addVideo.addVideoData,
    getSubjectsResponse: state.courses.getSubjects,
    getChaptersResponse: state.courses.getChapters,
    getTopicsResponse: state.courses.getTopics,
  };
};

export default connect(mapStateToProps, {
  addVideo,
  getSubjects,
  getChapters,
  getTopics,
})(index);
