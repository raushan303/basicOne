import React, { Component } from 'react';

import Loader from '../Loader';

import ChapterWrapper from './style';

import { fetchSubTopics, fetchAllTopics } from '../../shared/http';

import TopicCard from '../Card/TopicCard';
import SubTopicCard from '../Card/SubTopicCard';

class Chapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopic: [],
      selectTopicName: '',
      allTopics: [],
      selectedSubject: '',
      isLoading: true,
      isTopicsLoading: false,
    };
    this.selectTopic = this.selectTopic.bind(this);
  }

  async selectTopic(index, name) {
    this.setState({ isTopicsLoading: true });

    var temp = [];
    console.log(index);
    temp = await fetchSubTopics(this.state.selectedSubject, name);
    await this.setState({ selectedTopic: temp });
    await this.setState({ selectTopicName: name });
    this.setState({ isTopicsLoading: false });
    console.log(this.state.selectedTopic, this.state.selectTopicName);
  }

  async componentDidMount() {
    // this.setState({isLoading:true});
    var temp = window.location.href;
    var subject = '';

    for (var i = temp.length - 1; temp[i] != '/'; i--)
      subject = temp[i] + subject;

    this.setState({ selectedSubject: subject });
    var allTopics = await fetchAllTopics(subject);
    this.setState({ allTopics: allTopics });
    this.setState({ isLoading: false });
  }

  render() {
    const topics = this.state.allTopics.map((user, i) => {
      return (
        <a
          onClick={() => {
            this.selectTopic(user, user);
          }}
        >
          <TopicCard details={user} />
        </a>
      );
    });

    if (this.state.isLoading) {
      return <Loader />;
    } else {
      return (
        <ChapterWrapper>
          <div className='chap-component-container clearfix'>
            <div class='chap-topic-card-container'>{topics}</div>

            <div class='chap-subject-card-container'>
              {(() => {
                if (this.state.isTopicsLoading) {
                  return <Loader />;
                } else {
                  return this.state.selectedTopic.map((user, i) => {
                    if (user.length > 18) user = user.slice(0, 18) + '...';
                    return (
                      <SubTopicCard
                        chapter={this.state.selectTopicName}
                        details={user}
                      />
                    );
                  });
                }
              })()}
            </div>
          </div>
        </ChapterWrapper>
      );
    }
  }
}

export default Chapter;
