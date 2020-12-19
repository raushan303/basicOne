import React, { useEffect, useState } from 'react';

import Loader from '../Loader';

import ChapterWrapper from './style';

import { fetchSubTopics, fetchAllTopics } from '../../shared/http';

import Banner from '../Banner';

import TopicCard from '../Card/TopicCard';
import SubTopicCard from '../Card/SubTopicCard';

import { Tabs, Row, Col } from 'antd';

const { TabPane } = Tabs;

let subject;

function Chapter() {
  const [topicList, setTopicList] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  const [chapterLoading, setChapterLoading] = useState(true);
  const [topicLoading, setTopicLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    const getChapters = async () => {
      subject = window.location.href.split('/').pop();
      let allChapters = await fetchAllTopics(subject);
      setChapterList(allChapters);
      setChapterLoading(false);
      setCurrentTab('0');
    };
    getChapters();
  }, []);

  const selectTopic = async (index, name) => {
    setTopicLoading(true);
    let temp = await fetchSubTopics(subject, name);
    temp = [...temp, ...temp];
    console.log(temp, subject);
    setTopicList(temp);
    setTopicLoading(false);
  };

  useEffect(() => {
    if (currentTab !== '' && currentTab) {
      let index = parseInt(currentTab);
      selectTopic(currentTab, chapterList[index]);
    }
  }, [currentTab]);

  return (
    <>
      {chapterLoading ? (
        <Loader />
      ) : (
        <ChapterWrapper>
          <Banner
            subject={subject}
            chapterCount={12}
            videoCount={45}
            learnt={30}
            practice={23}
          />

          <div className='tab-container'>
            <Tabs
              defaultActiveKey='1'
              activeKey={currentTab}
              onChange={setCurrentTab}
              centered
            >
              {chapterList.map((user, i) => {
                return (
                  <TabPane
                    tab={<TopicCard details={user} />}
                    key={i.toString()}
                  >
                    {topicLoading ? (
                      <Loader />
                    ) : (
                      <Row style={{ marginTop: '50px' }}>
                        {topicList.map((user, i) => {
                          return (
                            <Col
                              xs={24}
                              sm={12}
                              md={12}
                              lg={8}
                              xl={6}
                              className='sub-topic-card-container'
                            >
                              <SubTopicCard chapter={subject} details={user} />
                            </Col>
                          );
                        })}
                      </Row>
                    )}
                  </TabPane>
                );
              })}
            </Tabs>
          </div>
        </ChapterWrapper>
      )}
    </>
  );
}

export default Chapter;
