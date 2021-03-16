import React from 'react';
import Collapsible from 'react-collapsible';
import { CollapsibleWrap } from './style';
import { ic_expand_more } from 'react-icons-kit/md/ic_expand_more';
import { ic_expand_less } from 'react-icons-kit/md/ic_expand_less';
import Icon from 'react-icons-kit';
import SubTopicCard from '../Card/SubTopicCard';

const sampleSkeletons = [1, 2, 3, 4];
export default function CollapsiblePlaylist({
  topic,
  activeTopicId,
  setActiveTopicId,
  activeTopicVideos,
  activeVideoId,
  setActiveVideoId,
}) {
  return (
    <CollapsibleWrap>
      <Collapsible
        key={topic.topicId}
        open={topic.topicId === activeTopicId ? true : false}
        trigger={
          <>
            <div className='chapter-title' style={{ height: 62 }}>
              <span
                className='bold-14 tc-2'
                style={{ color: 'rgba(18, 18, 29, 0.6)', width: '80%' }}
              >
                {topic?.topicName}
              </span>
              <span className='topic-count'>{topic?.conceptCount}</span>
              <Icon icon={ic_expand_more} size={30} style={{ color: 'rgba(18, 18, 29, 0.6)' }} />
            </div>
          </>
        }
        triggerWhenOpen={
          <>
            <div className='chapter-title' style={{ height: 62 }}>
              <span
                className='bold-14 tc-2'
                style={{ color: 'rgba(18, 18, 29, 0.6)', width: '80%' }}
              >
                {topic?.topicName}
              </span>
              <span className='topic-count'>{topic?.conceptCount}</span>
              <Icon icon={ic_expand_less} size={30} style={{ color: 'rgba(18, 18, 29, 0.6)' }} />
            </div>
          </>
        }
        onOpening={() => {}}
        onTriggerClosing={() => {
          // setActiveChapterTopics([]);
          setActiveTopicId(null);
        }}
        onTriggerOpening={() => {
          // setActiveChapterTopics([]);
          setActiveTopicId(topic?.topicId);
        }}
      >
        {activeTopicVideos?.map((subtopic) => {
          return (
            <div
              onClick={() => {
                setActiveVideoId(subtopic?.subtopicId);
              }}
            >
              <SubTopicCard chapter={'Biology'} subtopic={subtopic} />
            </div>
          );
        })}
      </Collapsible>
    </CollapsibleWrap>
  );
}
