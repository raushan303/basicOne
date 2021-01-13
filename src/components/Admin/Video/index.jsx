import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Row, Col, Select, Form, Input, Tag, InputNumber, Upload, Button } from 'antd';

const { Option } = Select;

const data = ['Grade', 'Subject', 'Chapter', 'Topic'];

const tmpData = [
  {
    grade: '10th',
    subject: [
      {
        subjectName: 'Math',
        chapter: [
          {
            chapterName: 'Calculus',
            topic: [
              {
                TopicName: 'left diff',
              },
              {
                TopicName: 'left diff',
              },
            ],
          },
          {
            chapterName: 'Calculus',
            topic: [
              {
                TopicName: 'left diff',
              },
              {
                TopicName: 'left diff',
              },
            ],
          },
        ],
      },
    ],
  },
];

function index() {
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
    image: null,
  });
  const [addState, setAddState] = useState([0, 0, 0, 0]);

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
            {data.map((str) => (
              <div className='select-container'>
                <Select placeholder={`Select ${str}`}>
                  <Option>op1</Option>
                </Select>
                <div className='add'>+</div>
              </div>
            ))}
          </Row>
          <Row className='mt-50 ml-50' style={{ alignItems: 'center' }}>
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
                  <Input />
                </Form.Item>
                <Form.Item label='Video Link'>
                  <Input />
                </Form.Item>
                <Form.Item label='Video Time'>
                  <InputNumber />
                </Form.Item>
                <Form.Item label='Note'>
                  <Input.TextArea />
                </Form.Item>
                <Form.Item label='Image'>
                  <Upload>
                    <Button>Upload</Button>
                  </Upload>
                </Form.Item>
              </Form>
            </div>
            <div className='ml-100'>
              <Button
                style={{ height: '100px', width: '100px', fontWeight: 500, borderRadius: '12px' }}
              >
                Upload
              </Button>
            </div>
          </Row>
        </div>
      ) : (
        <div>
          <p>hello</p>
        </div>
      )}
    </Wrapper>
  );
}

export default index;
