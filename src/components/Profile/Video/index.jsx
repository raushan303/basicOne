import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Row, Col, Select, Form, Input, Tag, InputNumber, Upload, Button, message } from 'antd';

import VideoCard from '../VideoCard';

const { Option } = Select;

const data = ['Grade', 'Subject', 'Chapter', 'Topic'];

function index() {
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
      <Row className='bold-30 heading-color roboto' style={{ padding: '20px 10px' }}>
        Bookmarked -{'>'} &nbsp;The secret of getting ahead is getting started
      </Row>
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

      <Row className='bold-30 heading-color roboto mt-50' style={{ padding: '20px 10px' }}>
        Watched History -{'>'} &nbsp; The greater the effort, the greater the glory.
      </Row>
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
    </Wrapper>
  );
}

export default index;
