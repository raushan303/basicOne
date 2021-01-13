import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Row, Col, Select } from 'antd';
const { Option } = Select;
function index() {
  const [addMode, setAddMode] = useState(false);
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
            <Select placeholder='Select Grade'>
              <Option>op1</Option>
            </Select>
            <Select placeholder='Select Subject'>
              <Option>op1</Option>
            </Select>
            <Select placeholder='Select Chapter'>
              <Option>op1</Option>
            </Select>
            <Select placeholder='Select Chapter'>
              <Option>op1</Option>
            </Select>
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
