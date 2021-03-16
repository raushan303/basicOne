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
import { getSubtopicsStats } from '../../redux/action/getCoursesStat';

const videos = [
  {
    id: 115783408,
    name: 'Jambinai - Connection',
    image: 'https://i.vimeocdn.com/video/924124243_640.jpg',
  },
  {
    id: 438166716,
    name: 'Jambinai - They Keep Silence',
    image: 'https://i.vimeocdn.com/video/924124243_640.jpg',
  },
  {
    id: 169408731,
    name: 'Hoody - Like You',
    image: 'https://i.vimeocdn.com/video/924124243_640.jpg',
  },
  {
    id: 438166716,
    name: 'Jambinai - They Keep Silence ',
    image: 'https://i.vimeocdn.com/video/924124243_640.jpg',
  },
  {
    id: 115783408,
    name: 'Jambinai - Connection',
    image: 'https://i.vimeocdn.com/video/924124243_640.jpg',
  },
  {
    id: 438166716,
    name: 'Jambinai - They Keep Silence',
    image: 'https://i.vimeocdn.com/video/924124243_640.jpg',
  },
  {
    id: 169408731,
    name: 'Hoody - Like You',
    image: 'https://i.vimeocdn.com/video/924124243_640.jpg',
  },
  {
    id: 438166716,
    name: 'Jambinai - They Keep Silence',
    image: 'https://i.vimeocdn.com/video/924124243_640.jpg',
  },
];

function index({ getTopics, topicsResponse, getSubtopicsStats, subtopicsResponse }) {
  const router = useRouter();
  const path = router.query;
  const chapterId = parseInt(path.subName.split('-')[0]);
  const topicId = parseInt(path.topicName.split('-')[0]);

  const [videoIndex, setVideoIndex] = useState(0);
  const [progress, setProgress] = useState({});
  const [startTime, setStartTime] = useState(0);
  const [timeFetched, setTimeFetched] = useState(0);

  const [activeTopicId, setActiveTopicId] = useState(topicId);
  const [activeTopicVideos, setActiveTopicVideos] = useState([]);
  const [activeVideoId, setActiveVideoId] = useState(null);

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
        setActiveTopicVideos(response?.data);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [subtopicsResponse]);

  const selectVideo = async (index) => {
    setVideoIndex(index);
    setTimeFetched(0);
    var res = await getVideoTime(videos[index].id);
    if (res.message == 'Sucdcess !') {
      setStartTime(parseInt(res.data.time));
    } else setStartTime(0);
    setTimeFetched(1);
  };

  const handlePlayerPause = async () => {
    var res = await updateVideoTime(videos[videoIndex].id, progress.seconds);
  };

  useEffect(() => {
    const getTime = async () => {
      var res = await getVideoTime(videos[videoIndex].id);
      if (res.datab) {
        console.log(res, parseInt(res.data.time), 'time!!');
        setStartTime(parseInt(res.data.time));
      } else setStartTime(0);
      setTimeFetched(1);
    };
    getTime();
  }, []);

  const onEnd = () => {
    updateVideoTime(videos[videoIndex].id, progress.duration - 1);
  };

  const onProgressHandler = (e) => {
    setProgress(e);
    console.log(e);
  };

  const video = videos[videoIndex];

  if (timeFetched == 0) return <Loader />;
  else {
    return (
      <VideoPlayerWrapper>
        <Row className='outer-container'>
          <Col xs={24} sm={22} md={22} lg={16} xl={16}>
            <div class='vimeo-container'>
              <Vimeo
                className='vimeo-player'
                video={video.id}
                autoplay
                speed={true}
                start={Math.max(0, startTime - 15)}
                onEnd={onEnd}
                onPause={handlePlayerPause}
                onProgress={onProgressHandler}
              />
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
              <div className='content-container'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged
              </div>
            </Collapsible>
          </Col>
          <Col xs={24} sm={22} md={22} lg={8} xl={7}>
            <div className='other-videos-container'>
              {topicList?.map((topic, index) => (
                <CollapsibleList
                  topic={topic}
                  activeTopicId={activeTopicId}
                  setActiveTopicId={setActiveTopicId}
                  activeTopicVideos={activeTopicVideos}
                  activeVideoId={activeVideoId}
                  setActiveVideoId={setActiveVideoId}
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
  };
}

export default connect(mapStateToProps, {
  getTopics,
  getSubtopicsStats,
})(index);
