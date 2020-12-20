import React, { useState, useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { updateVideoTime, getVideoTime } from '../../shared/http';

import { VideoPlayerWrapper } from './style';

import Loader from '../Loader';

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

function index() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoList, setVideoList] = useState([]);
  const [progress, setProgress] = useState({});
  const [startTime, setStartTime] = useState(0);
  const [timeFetched, setTimeFetched] = useState(0);

  const selectVideo = async (index) => {
    // await this.setState({isLoading: true});
    await setVideoIndex(index);
    await setTimeFetched(0);
    var res = await getVideoTime(videos[videoIndex].id);

    if (res.message == 'Success !') {
      console.log(res, parseInt(res.data.time), 'time!!');
      setStartTime(parseInt(res.data.time));
    } else setStartTime(0);
    setTimeFetched(1);
    // await this.setState({isLoading: false});
  };

  const handlePlayerPause = async () => {
    var res = await updateVideoTime(videos[videoIndex].id, progress.seconds);
    console.log('Paused', res);
  };

  useEffect(() => {
    const getTime = async () => {
      var res = await getVideoTime(videos[videoIndex].id);

      if (res.data) {
        console.log(res, parseInt(res.data.time), 'time!!');
        setStartTime(parseInt(res.data.time));
      } else setStartTime(0);
      setTimeFetched(1);
    };
    getTime();
    // await this.setState({isLoading: false});
  }, []);

  const onEnd = async () => {
    var res = await updateVideoTime(
      videos[videoIndex].id,
      progress.duration - 1
    );
    console.log('Ended!!!!');
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
        <div className='vid-component-container'>
          <div className='vid-video-container'>
            <div class='vid-video-vimeo-container'>
              <Vimeo
                video={video.id}
                width={1000}
                height={570}
                autoplay
                speed={true}
                start={Math.max(0, startTime - 15)}
                // volume={volume}
                // paused={paused}
                onEnd={onEnd}
                onPause={handlePlayerPause}
                // onPlay={this.handlePlayerPlay}
                onProgress={onProgressHandler}
              />
            </div>

            <p className='vid-video-content'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
          </div>

          <div className='vid-other-videos-container'>
            {videos.map((choice, index) => (
              <a
                href={`#!/video/${index}`}
                className={`${video === choice ? 'active' : ''}`}
                onClick={() => selectVideo(index)}
              >
                <div className='vid-other-videos clearfix'>
                  <img src={choice.image} />
                  <div class='vid-other-videos-text'>{choice.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </VideoPlayerWrapper>
    );
  }
}

export default index;
