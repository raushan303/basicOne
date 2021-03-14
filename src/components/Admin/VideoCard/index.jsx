import React from 'react';
import { Wrapper } from './style';
import { Form } from 'antd';
const fieldData = [
  { listName: 'Grade', idName: 'gradeId', fieldName: 'grade' },
  { listName: 'Subject', idName: 'subjectId', fieldName: 'subjectName' },
  { listName: 'Chapter', idName: 'chapterId', fieldName: 'chapterName' },
  { listName: 'Topic', idName: 'topicId', fieldName: 'topicName' },
];

function index({ data, img }) {
  return (
    <Wrapper>
      <div className='card video-card '>
        <div className='card__side card__side--front'>
          <div className='img-box'>
            <img src={img} />
          </div>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: 500,
              padding: '10px',
            }}
            className='tc-1'
          >
            {data?.subtopicName}
          </div>
          <div className='stats-container mt-10'>
            <div className='stats'>
              <div className='view'>
                <div style={{ fontSize: '12px' }}>views</div>
                <div>20</div>
              </div>
              <div className='like'>
                <div>like</div>
                <div>20</div>
              </div>
              <div className='comment'>
                <div>comment</div>
                <div>20</div>
              </div>
            </div>
          </div>
        </div>
        <div className='card__side card__side--back'>
          <Form>
            {fieldData?.map((obj) => (
              <Form.Item label={obj.listName}>
                <div className='sub-text tc-2'>{data[obj.fieldName]}</div>
              </Form.Item>
            ))}
          </Form>
          <a class='btn btn--orange mt-30'>Learn Now!</a>
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
