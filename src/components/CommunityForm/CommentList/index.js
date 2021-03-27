import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import CommentCard from '../CommentCard';
import { connect } from 'react-redux';
import { message } from 'antd';

import PostComment from '../postComment';

const Container = tw.div`relative`;

const ColumnContainer = tw.div`flex flex-wrap flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-6 md:pt-8 md:pb-16`;

const Heading = tw.h1`font-black text-xl md:text-4xl leading-snug w-full text-center pt-8 pb-4 md:py-12`;
const SubHeading = tw.h1`text-dark-blue text-xl w-full text-right px-4 md:px-20 cursor-pointer`;

const Wrapper = styled.div``;

import { getComments, uploadComments } from '../../../redux/action/getComments';

const index = ({ background, setVisible, getComments, getCommentsRes, activeSubtopic }) => {
  // const commentList = [1, 2, 3, 4, 5];

  const [commentList, setCommentList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (activeSubtopic?.subtopicId === 0 || activeSubtopic?.subtopicId) {
      getComments(activeSubtopic?.subtopicId);
    }
  }, [activeSubtopic]);

  useEffect(() => {
    if (getCommentsRes.response) {
      const response = getCommentsRes?.data?.data;
      if (response?.success && !getCommentsRes?.error) {
        setCommentList(response?.data);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [getCommentsRes]);

  const addComment = (comment) => {
    setCommentList((prevState) => [...prevState, comment]);
  };

  return (
    <Wrapper style={{ background }}>
      <PostComment visible={modalVisible} setVisible={setModalVisible} addComment={addComment} />
      <Container>
        <Heading className='heading'>Ask a Question</Heading>
        <SubHeading onClick={() => setModalVisible(true)}>Post a Question</SubHeading>

        <ColumnContainer>
          {commentList?.map((comment) => (
            <CommentCard comment={comment} setVisible={setVisible} />
          ))}
        </ColumnContainer>
      </Container>
    </Wrapper>
  );
};

function mapStateToProps(state) {
  return {
    getCommentsRes: state.comments.getComments,
    uploadCommentsRes: state.comments.uploadComments,
    activeSubtopic: state.coursesStats.activeSubtopic.data,
  };
}

export default connect(mapStateToProps, {
  getComments,
  uploadComments,
})(index);
