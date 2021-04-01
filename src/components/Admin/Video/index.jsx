import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Row, Col, Select, Form, Input, Tag, InputNumber, Upload, Button, message } from 'antd';
import { connect } from 'react-redux';
import {
  getSubtopicsByGrade,
  getSubtopicsBySubject,
  getSubtopicsByChapter,
  getSubtopicsByTopic,
} from '../../../redux/action/getSubtopicsByAuthor';

import VideoCard from '../VideoCard/newVideoCard';

import UploadVideo from './uploadVideo';

const { Option } = Select;

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

const data = [
  { listName: 'Grade', idName: 'gradeId', fieldName: 'grade' },
  { listName: 'Subject', idName: 'subjectId', fieldName: 'subjectName' },
  { listName: 'Chapter', idName: 'chapterId', fieldName: 'chapterName' },
  { listName: 'Topic', idName: 'topicId', fieldName: 'topicName' },
];

function index({
  getSubtopicsByGrade,
  getSubtopicsBySubject,
  getSubtopicsByChapter,
  getSubtopicsByTopic,
  dataByGrade,
  dataBySubject,
  dataByChapter,
  dataByTopic,
  userDetails,
}) {
  const [addMode, setAddMode] = useState(false);
  const [searchDetails, setSearchDetails] = useState({
    Grade: '10th',
    gradeId: null,
    Subject: null,
    subjectId: null,
    Chapter: null,
    chapterId: null,
    Topic: null,
    topicId: null,
  });

  const authorId = 0;

  const [subtopicList, setSubtopicList] = useState([]);

  const [selectList, setSelectList] = useState({
    Grade: GradeArray,
    Subject: [],
    Chapter: [],
    Topic: [],
  });

  const handleSelectChange = (listName, idName) => (val, child) => {
    setSearchDetails((prevState) => ({
      ...prevState,
      [listName]: val,
      [idName]: child.id,
    }));
  };

  useEffect(() => {
    if (searchDetails.Grade) {
      getSubtopicsByGrade(authorId, searchDetails.Grade);
    }
  }, [searchDetails.Grade]);

  useEffect(() => {
    if (dataByGrade.response) {
      const response = dataByGrade?.data?.data;
      console.log(response);
      if (response?.success && !dataByGrade?.error) {
        setSubtopicList(response?.data?.subtopicList);
        setSelectList((prevState) => ({
          ...prevState,
          Subject: response?.data?.subjectList,
          Chapter: [],
          Topic: [],
        }));
        setSearchDetails((prevState) => ({
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
  }, [dataByGrade]);

  useEffect(() => {
    if (searchDetails.subjectId !== null) {
      getSubtopicsBySubject(authorId, searchDetails.subjectId);
    }
  }, [searchDetails.subjectId]);

  useEffect(() => {
    if (dataBySubject.response) {
      const response = dataBySubject?.data?.data;
      if (response?.success && !dataBySubject?.error) {
        setSubtopicList(response?.data?.subtopicList);
        setSelectList((prevState) => ({
          ...prevState,
          Chapter: response?.data?.chapterList,
          Topic: [],
        }));
        setSearchDetails((prevState) => ({
          ...prevState,
          Chapter: null,
          chapterId: null,
          Topic: null,
          topicId: null,
        }));
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [dataBySubject]);

  useEffect(() => {
    if (searchDetails.chapterId !== null) {
      getSubtopicsByChapter(authorId, searchDetails.chapterId);
    }
  }, [searchDetails.chapterId]);

  useEffect(() => {
    if (dataByChapter.response) {
      const response = dataByChapter?.data?.data;
      if (response?.success && !dataByChapter?.error) {
        setSubtopicList(response?.data?.subtopicList);
        setSelectList((prevState) => ({
          ...prevState,
          Topic: response?.data?.topicList,
        }));
        setSearchDetails((prevState) => ({
          ...prevState,
          Topic: null,
          topicId: null,
        }));
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [dataByChapter]);

  useEffect(() => {
    if (searchDetails.topicId !== null) {
      getSubtopicsByTopic(authorId, searchDetails.topicId);
    }
  }, [searchDetails.topicId]);

  useEffect(() => {
    if (dataByTopic.response) {
      const response = dataByTopic?.data?.data;
      if (response?.success && !dataByTopic?.error) {
        setSubtopicList(response?.data?.subtopicList);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [dataByTopic]);

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
            {data.map((obj, index) => {
              let isDisbaled = false;
              data.forEach((obj2, index2) => {
                if (index2 < index && !searchDetails[obj2.listName]) isDisbaled = true;
              });
              return (
                <div className='select-container'>
                  <Select
                    disabled={isDisbaled}
                    placeholder={`Select ${obj.listName}`}
                    onChange={handleSelectChange(obj.listName, obj.idName)}
                    value={searchDetails[obj.listName]}
                  >
                    {selectList[obj.listName].map((val) => (
                      <Option value={val[obj.fieldName]} id={val[obj.idName]}>
                        {val[obj.fieldName]}
                      </Option>
                    ))}
                  </Select>
                </div>
              );
            })}
          </Row>
          <Row className='mt-10'>
            {subtopicList?.map((data) => (
              <div style={{ padding: '15px' }}>
                <VideoCard img='/images/undraw8.svg' data={data} />
              </div>
            ))}
          </Row>
        </>
      )}
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    dataByGrade: state.subtopicsByAuthor.getSubtopicsByGrade,
    dataBySubject: state.subtopicsByAuthor.getSubtopicsBySubject,
    dataByChapter: state.subtopicsByAuthor.getSubtopicsByChapter,
    dataByTopic: state.subtopicsByAuthor.getSubtopicsByTopic,
    userDetails: state.userDetails.userDetails.data,
  };
};

export default connect(mapStateToProps, {
  getSubtopicsByGrade,
  getSubtopicsBySubject,
  getSubtopicsByChapter,
  getSubtopicsByTopic,
})(index);
