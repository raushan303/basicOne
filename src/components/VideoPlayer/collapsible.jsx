import React from 'react';
import Collapsible from 'react-collapsible';
import { CollapsibleWrap } from './style';
import { ic_expand_more } from 'react-icons-kit/md/ic_expand_more';
import { ic_expand_less } from 'react-icons-kit/md/ic_expand_less';
import Icon from 'react-icons-kit';
import SubTopicCard from '../Card/SubTopicCard';

const sampleSkeletons = [1, 2, 3, 4];
export default function CollapsiblePlaylist({
  chapter,
  activeChapterId,
  setActiveChapterId,
  activeChapterTopics,
  setActiveChapterTopics,
  activeTopicId,
  setActiveTopicId,
}) {
  return (
    <CollapsibleWrap>
      <Collapsible
        key={chapter.chapterId}
        open={chapter.chapterId === activeChapterId ? true : false}
        trigger={
          <>
            <div className='chapter-title' style={{ height: 62 }}>
              <span
                className='bold-14 tc-2'
                style={{ color: 'rgba(18, 18, 29, 0.6)', width: '80%' }}
              >
                {chapter.chapterName}
              </span>
              <span className='topic-count'>{chapter.topicCount}</span>
              <Icon
                icon={ic_expand_more}
                size={30}
                style={{ color: 'rgba(18, 18, 29, 0.6)' }}
              />
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
                {chapter.chapterName}
              </span>
              <span className='topic-count'>{chapter.topicCount}</span>
              <Icon
                icon={ic_expand_less}
                size={30}
                style={{ color: 'rgba(18, 18, 29, 0.6)' }}
              />
            </div>
          </>
        }
        onOpening={() => {}}
        onTriggerClosing={() => {
          // setActiveChapterTopics([]);
          setActiveChapterId(0);
        }}
        onTriggerOpening={() => {
          // setActiveChapterTopics([]);
          setActiveChapterId(chapter.chapterId);
        }}
      >
        {activeChapterTopics.map((topic) => {
          return (
            <div
              onClick={() => {
                setActiveTopicId(topic.topicId);
              }}
            >
            
              <SubTopicCard chapter={'Biology'} details={"current"} />
            </div>
          );
        })}
      </Collapsible>
    </CollapsibleWrap>
  );
}
