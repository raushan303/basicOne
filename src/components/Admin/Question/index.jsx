import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Row, Col, Select, Form, Input, Tag, InputNumber, Upload, Button, message } from 'antd';
import QuestionCard from '../QuestionCard';
const { Option } = Select;

const data = ['Grade', 'Subject', 'Chapter', 'Topic'];
function index() {
  const [addMode, setAddMode] = useState(false);
  const [questionDetails, setQuestionDetails] = useState({
    Grade: null,
    Subject: null,
    Chapter: null,
    Topic: null,
    Title: null,
    Question: null,
    Options: ['', '', '', ''],
    Answer: null,
    Note: null,
    AddField: null,
  });
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

  const handleSelectChange = (field, type = '') => (val, child) => {
    if (type === 'search')
      setSearchDetails((prevState) => ({
        ...prevState,
        [field]: val,
      }));
    else
      setQuestionDetails((prevState) => ({
        ...prevState,
        [field]: val,
      }));
  };

  const handleInputChange = (field, index = 0) => (e) => {
    if (field === 'Options') {
      let { Options } = questionDetails;
      Options[index - 1] = e.target.value;
      setQuestionDetails((prevState) => ({
        ...prevState,
        Options,
      }));
    } else
      setQuestionDetails((prevState) => ({
        ...prevState,
        [field]: e.target.value,
      }));
  };

  return (
    <Wrapper>
      <Row
        style={{ justifyContent: 'flex-end', cursor: 'pointer' }}
        onClick={() => setAddMode((prevState) => !prevState)}
      >
        Add Question
      </Row>
      {addMode ? (
        <div>
          <Row>
            {data.map((str, index) => (
              <div className='select-container'>
                <Select
                  placeholder={`Select ${str}`}
                  onChange={handleSelectChange(str)}
                  value={questionDetails[str]}
                >
                  {selectList[str].length ? (
                    selectList[str].map((val) => <Option value={val}>{val}</Option>)
                  ) : (
                    <Option value={null}>Select Previous Fields</Option>
                  )}
                </Select>
              </div>
            ))}
          </Row>
          <Row className='form-container' style={{ alignItems: 'center' }}>
            <div className='video-form-container'>
              <Form>
                {data.map((str) => (
                  <Form.Item label={str}>
                    <Tag color='#108ee9'>
                      {questionDetails[str] ? questionDetails[str] : `Select ${str}`}
                    </Tag>
                  </Form.Item>
                ))}

                <Form.Item label='Title'>
                  <Input onChange={handleInputChange('Title')} />
                </Form.Item>
                <Form.Item label='Question'>
                  <Input onChange={handleInputChange('Question')} />
                </Form.Item>
                <Form.Item label='Option 1'>
                  <Input onChange={handleInputChange('Options', 1)} />
                </Form.Item>
                <Form.Item label='Option 2'>
                  <Input onChange={handleInputChange('Options', 2)} />
                </Form.Item>
                <Form.Item label='Option 3'>
                  <Input onChange={handleInputChange('Options', 3)} />
                </Form.Item>
                <Form.Item label='Option 4'>
                  <Input onChange={handleInputChange('Options', 4)} />
                </Form.Item>
                <Form.Item label='Answer'>
                  <Input onChange={handleInputChange('Answer')} />
                </Form.Item>
                <Form.Item label='Note'>
                  <Input.TextArea onChange={handleInputChange('Note')} />
                </Form.Item>
              </Form>
            </div>
            <div className='upload-container'>
              <Button
                style={{ height: '100px', width: '100px', fontWeight: 500, borderRadius: '12px' }}
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
            <QuestionCard />
            <QuestionCard />
          </Row>
        </>
      )}
    </Wrapper>
  );
}

export default index;
