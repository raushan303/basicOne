import React, { useEffect, useState } from 'react';

import Loader from '../Loader';

import ChapterWrapper from './style';

import { fetchSubTopics, fetchAllTopics } from '../../shared/http';

import Banner from '../Banner';

import TopicCard from '../Card/TopicCard';
import SubTopicCard from '../Card/SubTopicCard';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

let subject;

function Chapter() {
  const [topicList, setTopicList] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  const [chapterLoading, setChapterLoading] = useState(true);
  const [topicLoading, setTopicLoading] = useState(false);

  const selectTopic = async (index, name) => {
    setTopicLoading(true);
    var temp = [];
    console.log(index);
    temp = await fetchSubTopics(subject, name);
    console.log(temp, subject);
    setTopicList(temp);
    setTopicLoading(false);
  };

  useEffect(() => {
    const getChapters = async () => {
      var temp = window.location.href;
      subject = '';

      for (var i = temp.length - 1; temp[i] != '/'; i--)
        subject = temp[i] + subject;

      let allChapters = await fetchAllTopics(subject);
      setChapterList(allChapters);
      setChapterLoading(false);
    };
    getChapters();
  }, []);

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

          <Tabs defaultActiveKey='1' centered>
            {chapterList.map((user, i) => {
              return (
                <TabPane tab={<TopicCard details={user} />} key={i.toString()}>
                  <TopicCard details={user} />
                </TabPane>
              );
            })}
          </Tabs>

          <div className='chap-component-container'>
            {/* <div class='chap-topic-card-container'>{topics}</div> */}

            <div class='chap-subject-card-container'>
              {topicLoading ? (
                <Loader />
              ) : (
                topicList.map((user, i) => {
                  if (user.length > 18) user = user.slice(0, 18) + '...';
                  return <SubTopicCard chapter={subject} details={user} />;
                })
              )}
            </div>
          </div>
        </ChapterWrapper>
      )}
    </>
  );
}

export default Chapter;
