import React, { useEffect, useState } from 'react';

import Loader from '../Loader';

import ChapterWrapper from './style';
import { connect } from 'react-redux';
import {
  getSubjectStats,
  getChaptersStats,
  getTopicsStats,
} from '../../redux/action/getCoursesStat';

import Banner from '../Banner';

import ChapterCard from '../Card/ChapterCard';
import TopicCard from '../Card/TopicCard';
import { useRouter } from 'next/router';

import { Tabs, Row, Col, message } from 'antd';

const { TabPane } = Tabs;

let subject;

function Chapter({
  getSubjectStats,
  getChaptersStats,
  getTopicsStats,
  subjectStats,
  chaptersStats,
  topicsStats,
}) {
  const [topicList, setTopicList] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  const [chapterLoading, setChapterLoading] = useState(true);
  const [topicLoading, setTopicLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('');
  const [subjectDetails, setSubjectDetails] = useState({});

  const router = useRouter();
  const path = router.query.subName;
  const subjectId = parseInt(path.split('-')[0]);

  useEffect(() => {
    if (subjectId === 0 || subjectId) {
      getSubjectStats(subjectId);
      getChaptersStats(subjectId);
    }
  }, []);

  useEffect(() => {
    if (subjectStats.response) {
      const response = subjectStats?.data?.data;
      if (response?.success && !subjectStats?.error) {
        setSubjectDetails(response?.data);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [subjectStats]);

  useEffect(() => {
    if (chaptersStats.response) {
      setChapterLoading(false);
      const response = chaptersStats?.data?.data;
      if (response?.success && !chaptersStats?.error) {
        setChapterList(response?.data);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [chaptersStats]);

  useEffect(() => {
    if (currentTab !== '' && currentTab) {
      const index = parseInt(currentTab);
      getTopicsStats(chapterList[index].chapterId);
      setTopicLoading(true);
    }
  }, [currentTab]);

  useEffect(() => {
    if (topicsStats.response) {
      setTopicLoading(false);
      const response = topicsStats?.data?.data;
      if (response?.success && !topicsStats?.error) {
        setTopicList(response?.data);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [topicsStats]);

  return (
    <>
      {chapterLoading ? (
        <Loader />
      ) : (
        <ChapterWrapper>
          <Banner subjectDetails={subjectDetails} />

          <div className='tab-container'>
            <Tabs defaultActiveKey='1' activeKey={currentTab} onChange={setCurrentTab} centered>
              {chapterList.map((chapter, i) => {
                return (
                  <TabPane tab={<ChapterCard chapterDetails={chapter} />} key={i.toString()}>
                    {topicLoading ? (
                      <Loader />
                    ) : (
                      <Row style={{ marginTop: '50px' }}>
                        {topicList.map((topic, i) => {
                          return (
                            <Col
                              xs={24}
                              sm={12}
                              md={12}
                              lg={8}
                              xl={6}
                              className='sub-topic-card-container'
                            >
                              <TopicCard topicDetails={topic} />
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

function mapStateToProps(state) {
  return {
    subjectStats: state.coursesStats.getSubjectStats,
    chaptersStats: state.coursesStats.getChaptersStats,
    topicsStats: state.coursesStats.getTopicsStats,
    userDetails: state.userDetails.userDetails.data,
  };
}

export default connect(mapStateToProps, {
  getSubjectStats,
  getChaptersStats,
  getTopicsStats,
})(Chapter);
