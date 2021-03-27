import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import AskCard from '../AskCard';
import Icon from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { connect } from 'react-redux';
import { message } from 'antd';

import { uploadReply, getReply, deleteReply } from '../../../redux/action/getComments';

const Container = tw.div`relative py-20 flex flex-col items-center`;
const Banner = tw.div`bg-white py-4 px-10 max-w-screen-xl w-full`;
const IconContainer = tw.div`bg-grey w-fit cursor-pointer py-2 px-2 rounded-full`;

const Heading = tw.h1`mt-20 font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`w-full my-2 lg:my-6 text-lg lg:text-2xl font-medium text-color-2 max-w-screen-xl ml-8 md:mx-auto`;
const Wrapper = styled.div``;

import ReplyModal from '../PostReply';
import CommentModal from '../postComment';

const index = ({
  background,
  setVisible,
  getReply,
  getReplyRes,
  activeComment,
  deleteReply,
  deleteReplyRes,
}) => {
  const [replyList, setReplyList] = useState([]);
  const [count, setCount] = useState(1);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [replyModalVisible, setReplyModalVisible] = useState(false);

  useEffect(() => {
    if (activeComment?.commentId === 0 || activeComment?.commentId) {
      getReply(activeComment?.commentId);
    }
  }, [activeComment]);

  useEffect(() => {
    if (getReplyRes.response) {
      const response = getReplyRes?.data?.data;
      if (response?.success && !getReplyRes?.error) {
        setReplyList(response?.data);
        setCount(response?.data?.length + 1);
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [getReplyRes]);

  const addReply = (data) => {
    setReplyList((prevState) => [...prevState, data]);
  };

  const removeReply = (data) => {
    deleteReply({ replyId: data?.replyId });
  };

  useEffect(() => {
    if (deleteReplyRes.response) {
      const response = deleteReplyRes?.data?.data;
      if (response?.success && !deleteReplyRes?.error) {
        setReplyList((prevState) =>
          prevState.filter((reply) => reply.replyId !== response?.data?.replyId)
        );
        setCount((prevState) => prevState - 1);
        message.success('Deleted Successfully!');
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [deleteReplyRes]);

  return (
    <Wrapper style={{ background }}>
      <CommentModal visible={commentModalVisible} setVisible={setCommentModalVisible} />
      <ReplyModal
        visible={replyModalVisible}
        setVisible={setReplyModalVisible}
        addReply={addReply}
        setCount={setCount}
      />

      <Container>
        <Banner>
          <IconContainer>
            <Icon size={25} onClick={() => setVisible(true)} icon={arrowLeft2} />
          </IconContainer>
        </Banner>

        <Heading className='heading'>Clear Your Doubt Here!</Heading>

        <AskCard
          data={activeComment}
          button={true}
          setReplyModalVisible={setReplyModalVisible}
          index={1}
          count={count}
          type={0}
        />

        <Paragraph>
          {count - 1 || 0} {count > 2 ? 'Answers' : 'Answer'}
        </Paragraph>

        {replyList?.map((reply, index) => (
          <AskCard
            data={reply}
            index={index + 2}
            count={count}
            type={1}
            removeReply={removeReply}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

function mapStateToProps(state) {
  return {
    getReplyRes: state.comments.getReply,
    uploadReplyRes: state.comments.uploadReply,
    activeComment: state.comments.activeComment.data,
    deleteReplyRes: state.comments.deleteReply,
  };
}

export default connect(mapStateToProps, {
  getReply,
  uploadReply,
  deleteReply,
})(index);
