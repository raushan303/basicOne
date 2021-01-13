import React from 'react';

import Profile from './Profile';
import { Wrapper, TabWrapper } from './style';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import Video from './Video';
import Question from './Question';

function index() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default index;
