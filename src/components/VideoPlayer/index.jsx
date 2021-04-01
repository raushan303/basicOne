import React, { useState, useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { updateVideoTime, getVideoTime } from '../../shared/http';
import Collapsible from 'react-collapsible';

import { VideoPlayerWrapper } from './style';

import Loader from '../Loader';

import { Row, Col, message } from 'antd';

import CollapsibleList from './collapsible';
import { ic_expand_more } from 'react-icons-kit/md/ic_expand_more';
import { ic_expand_less } from 'react-icons-kit/md/ic_expand_less';
import Icon from 'react-icons-kit';

import { useRouter } from 'next/router';

import { connect } from 'react-redux';

import { getTopics } from '../../redux/action/getCoursesData';
import { getSubtopicsStats, updateActiveSubtopic } from '../../redux/action/getCoursesStat';
import { updateWatch } from '../../redux/action/user';

function index({
  getTopics,
  topicsResponse,
  getSubtopicsStats,
  subtopicsResponse,
  updateWatch,
  updateWatchResponse,
  updateActiveSubtopic,
}) {
  const router = useRouter();
  const path = router.query;
  const chapterId = parseInt(path.subName.split('-')[0]);
  const topicId = parseInt(path.topicName.split('-')[0]);

  const [progress, setProgress] = useState({});
  const [startTime, setStartTime] = useState(0);

  const [activeTopicId, setActiveTopicId] = useState(topicId);
  const [subtopicList, setSubtopicList] = useState([]);
  const [activeVideoData, setActiveVideoData] = useState({});

  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    getTopics(chapterId);
  }, []);

  useEffect(() => {
    if (topicsResponse.response) {
      const response = topicsResponse?.data?.data;
      if (response?.success && !topicsResponse?.error) {
        setTopicList(response?.data);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [topicsResponse]);

  useEffect(() => {
    if (activeTopicId === 0 || activeTopicId) {
      getSubtopicsStats(activeTopicId);
    }
  }, [activeTopicId]);

  useEffect(() => {
    if (subtopicsResponse.response) {
      const response = subtopicsResponse?.data?.data;
      if (response?.success && !subtopicsResponse?.error) {
        setSubtopicList(response?.data);
        setActiveVideoData(response?.data?.[0]);
        updateActiveSubtopic(response?.data?.[0]);
        setStartTime(response?.data?.[0]?.currentTime);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [subtopicsResponse]);

  const handlePlayerPause = async () => {
    if (
      !isNaN(activeVideoData?.currentTime) &&
      !isNaN(activeVideoData?.learntTime) &&
      !isNaN(progress.seconds)
    ) {
      const formatSubtopic = { ...activeVideoData };
      formatSubtopic.currentTime = Math.max(progress.seconds - 1, 0);
      formatSubtopic.learntTime = Math.max(formatSubtopic.learntTime, formatSubtopic.currentTime);
      updateWatch(formatSubtopic);
    }
  };

  const onEnd = () => {
    if (
      !isNaN(activeVideoData?.currentTime) &&
      !isNaN(activeVideoData?.learntTime) &&
      !isNaN(progress.seconds)
    ) {
      const formatSubtopic = { ...activeVideoData };
      formatSubtopic.currentTime = Math.max(progress.seconds - 1, 0);
      formatSubtopic.learntTime = Math.max(formatSubtopic.learntTime, formatSubtopic.currentTime);
      updateWatch(formatSubtopic);
    }
  };

  const onProgressHandler = (e) => {
    setProgress(e);
    setSubtopicList((prevState) =>
      prevState.map((subtopic) => {
        if (subtopic?.subtopicId === activeVideoData?.subtopicId)
          return {
            ...subtopic,
            currentTime: e.seconds - 1,
          };
        else return subtopic;
      })
    );
  };

  const changeVideo = (subtopic) => {
    handlePlayerPause();
    setActiveVideoData(subtopic);
    setStartTime(subtopic?.currentTime);
    updateActiveSubtopic(subtopic);
  };

  if (!topicsResponse?.response) return <Loader />;
  else {
    return (
      <VideoPlayerWrapper>
        <Row className='outer-container'>
          <Col xs={24} sm={22} md={22} lg={16} xl={16}>
            <div class='vimeo-container'>
              {activeVideoData?.url && (
                <Vimeo
                  className='vimeo-player'
                  video={activeVideoData?.url}
                  autoplay
                  speed={true}
                  start={startTime || 0}
                  onEnd={onEnd}
                  onPause={handlePlayerPause}
                  onProgress={onProgressHandler}
                />
              )}
            </div>
            <Collapsible
              trigger={
                <div className='collapsible-head'>
                  <span>Note</span>
                  <Icon
                    icon={ic_expand_more}
                    size={30}
                    style={{ color: 'rgba(18, 18, 29, 0.6)' }}
                  />
                </div>
              }
              triggerWhenOpen={
                <div className='collapsible-head'>
                  <span>Note</span>
                  <Icon
                    icon={ic_expand_less}
                    size={30}
                    style={{ color: 'rgba(18, 18, 29, 0.6)' }}
                  />
                </div>
              }
            >
              <div className='content-container'>{activeVideoData?.note || ''}</div>
            </Collapsible>
          </Col>
          <Col xs={24} sm={22} md={22} lg={8} xl={7}>
            <div className='other-videos-container'>
              {topicList?.map((topic, index) => (
                <CollapsibleList
                  topic={topic}
                  activeTopicId={activeTopicId}
                  setActiveTopicId={setActiveTopicId}
                  subtopicList={subtopicList}
                  changeVideo={changeVideo}
                  activeVideoData={activeVideoData}
                />
              ))}
            </div>
          </Col>
        </Row>
      </VideoPlayerWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    topicsResponse: state.courses.getTopics,
    subtopicsResponse: state.coursesStats.getSubtopicsStats,
    updateWatchResponse: state.user.updateWatch,
  };
}

export default connect(mapStateToProps, {
  getTopics,
  getSubtopicsStats,
  updateWatch,
  updateActiveSubtopic,
})(index);
