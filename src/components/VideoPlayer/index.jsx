import React, { useState, useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { updateVideoTime, getVideoTime } from '../../shared/http';
import Collapsible from 'react-collapsible';

import { VideoPlayerWrapper } from './style';

import Loader from '../Loader';

import { Row, Col } from 'antd';

import CollapsibleList from './collapsible';
import { ic_expand_more } from 'react-icons-kit/md/ic_expand_more';
import { ic_expand_less } from 'react-icons-kit/md/ic_expand_less';
import Icon from 'react-icons-kit';


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

const tvideos = [
  {
    chapterId: 1,
    chapterName: 'current',
    topicCount: 10,
  },
  {
    chapterId: 2,
    chapterName: 'current',
    topicCount: 10,
  },
  {
    chapterId: 3,
    chapterName: 'current',
    topicCount: 10,
  },
  {
    chapterId: 4,
    chapterName: 'current',
    topicCount: 10,
  },
];

const ttvideos = [
  {
    topicId: 1,
    chapterName: 'current',
    topicCount: 10,
  },
  {
    topicId: 2,
    chapterName: 'current',
    topicCount: 10,
  },
  {
    topicId: 3,
    chapterName: 'current',
    topicCount: 10,
  },
  {
    topicId: 4,
    chapterName: 'current',
    topicCount: 10,
  },
];

function index() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [progress, setProgress] = useState({});
  const [startTime, setStartTime] = useState(0);
  const [timeFetched, setTimeFetched] = useState(0);

  const [activeChapterId, setActiveChapterId] = useState(null);
  const [activeChapterTopics, setActiveChapterTopics] = useState(ttvideos);
  const [activeTopicId, setActiveTopicId] = useState(null);

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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </div>
            </Collapsible>
          </Col>
          <Col xs={24} sm={22} md={22} lg={8} xl={7}>
            <div className='other-videos-container'>
              {tvideos.map((choice, index) => (
                <CollapsibleList
                  chapter={choice}
                  activeChapterId={activeChapterId}
                  setActiveChapterId={setActiveChapterId}
                  activeChapterTopics={activeChapterTopics}
                  setActiveChapterTopics={setActiveChapterTopics}
                  activeTopicId={activeTopicId}
                  setActiveTopicId={setActiveTopicId}
                />
              ))}
            </div>
          </Col>
        </Row>
      </VideoPlayerWrapper>
    );
  }
}

export default index;
