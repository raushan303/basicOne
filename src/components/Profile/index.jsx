import React from 'react';

import Profile from './ProfileCardNew';
import { Wrapper, TabWrapper } from './style';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import Video from './Video';
import Question from './Question';

function index() {
  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          height: 'fit-content',
        }}
      >
        <Profile />
        <TabWrapper>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Video Contribution' key='1'>
              <Video />
            </TabPane>
            <TabPane tab='Question Contribution' key='2'>
              <Question />
            </TabPane>
          </Tabs>
        </TabWrapper>
      </div>
    </Wrapper>
  );
}

export default index;
