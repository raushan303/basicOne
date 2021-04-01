import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading as SubheadingBase } from '../../../misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from '../../../misc/Buttons.js';
import Icon from 'react-icons-kit';
import { ic_insert_comment } from 'react-icons-kit/md/ic_insert_comment';
import { ic_mode_comment } from 'react-icons-kit/md/ic_mode_comment';
import { thumbsUp } from 'react-icons-kit/fa/thumbsUp';
import { thumbsDown } from 'react-icons-kit/fa/thumbsDown';
import { checkCircle } from 'react-icons-kit/fa/checkCircle';
import { ic_remove_red_eye } from 'react-icons-kit/md/ic_remove_red_eye';
import { Button, message } from 'antd';
import { thumbsOUp } from 'react-icons-kit/fa/thumbsOUp';
import { thumbsODown } from 'react-icons-kit/fa/thumbsODown';

import { connect } from 'react-redux';

import {
  deleteComments,
  deleteReply,
  editReply,
  editComments,
  updateCommentLikeStatus,
  updateReplyLikeStatus,
  resetCommentState,
} from '../../../redux/action/getComments';

import ReplyModal from '../PostReply';
import CommentModal from '../postComment';
import { ThumbDown } from '@material-ui/icons';

const ColumnContainer = tw.div`w-full flex flex-wrap flex-col lg:flex-row md:items-center py-6 md:py-8`;
const TwoColumn = tw.div`w-full relative flex flex-wrap flex-shrink-0 border border-grey border-solid max-w-screen-xl mx-auto`;
const LeftColumn = tw.div`px-4 py-6 md:py-10 md:w-1/3 lg:w-1/4 font-display flex justify-center w-full`;
const RightColumn = tw.div`w-full px-4 md:px-8 py-6 md:py-10 md:w-2/3 lg:w-3/4 font-display bg-white flex flex-col items-start`;
const PrimaryButtonFollow = tw(
  PrimaryButtonBase
)`bg-dark-blue font-display uppercase font-normal text-sm tracking-wider text-white py-2 px-6 border-none mt-2 md:mt-4 hover:bg-dark-blue cursor-pointer`;
const PrimaryButtonReply = tw(
  PrimaryButtonBase
)`mr-4 md:mr-6 bg-dark-blue! font-display uppercase font-normal text-sm md:text-base tracking-wider text-white py-1 md:py-2 px-4 md:px-8 border-none cursor-pointer rounded-md`;
const PrimaryButtonSame = tw(
  Button
)`h-auto mr-4 md:mr-6 bg-white! font-display uppercase font-normal text-sm md:text-base tracking-wider text-dark-blue! hover:text-dark-blue py-1 md:py-2 px-4 md:px-6 border border-solid border-dark-blue cursor-pointer rounded-md`;

const UserBox = tw.div`flex flex-col items-center w-full`;
const Avatar = tw.div`h-16 w-16`;
const IconBox = tw.div`flex py-2 md:py-4`;

const Name = tw.h1`text-dark-blue text-lg lg:my-2`;
const Designation = tw.h1`text-black text-sm md:text-xl font-normal my-0`;
const Heading = tw.h1`text-center font-black text-2xl md:text-3xl leading-snug`;
const Paragraph = tw.p`text-sm lg:text-base font-medium text-gray-600`;
const Subheading = tw(SubheadingBase)`text-dark-blue`;
const Count = tw.h1`text-black text-sm pl-1 last:pr-0 pr-8 mb-0 flex items-center`;

const LikeBox = tw(Button)`p-3 md:p-5 flex items-center text-primary-200! rounded-lg`;

const index = ({
  background,
  data,
  index,
  count,
  type,
  userId,
  deleteReply,
  deleteComments,
  updateCommentLikeStatus,
  commentLikeRes,
  updateReplyLikeStatus,
  replyLikeRes,
  resetCommentState,
}) => {
  const [loading, setLoading] = useState(false);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [replyModalVisible, setReplyModalVisible] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [likeStatus, setLikeStatus] = useState({
    liked: 0,
    disLiked: 0,
    likeLoading: false,
    disLikeLoading: false,
    likeCount: 0,
    disLikeCount: 0,
  });

  useEffect(() => {
    if (data) {
      setLikeStatus((prevState) => ({
        ...prevState,
        likeCount: data?.likeCount,
        disLikeCount: data?.disLikeCount,
      }));
    }
    if (data?.userLikeStatus?.length) {
      const stat = data?.userLikeStatus?.[0];
      setLikeStatus((prevState) => ({
        ...prevState,
        liked: stat?.liked,
        disLiked: stat?.disLiked,
      }));
    }
  }, [data]);

  const handleDelete = () => {
    if (type) {
      setLoading(true);
      deleteReply({ replyId: data?.replyId, commentId: data?.commentId });
    } else {
      setLoading(true);
      deleteComments({ commentId: data?.commentId });
    }
  };

  const handleLike = (clickType) => {
    if (likeStatus.likeLoading || likeStatus.disLikeLoading) {
      message.info('updating previous request wait for few seconds!');
      return;
    }
    if (clickType === 'like') {
      setLikeStatus((prevState) => ({
        ...prevState,
        likeLoading: true,
      }));
      if (type)
        updateReplyLikeStatus({
          replyId: data?.replyId,
          liked: !likeStatus.liked,
          disLiked: 0,
        });
      else
        updateCommentLikeStatus({
          commentId: data?.commentId,
          liked: !likeStatus.liked,
          disLiked: 0,
        });
    } else {
      setLikeStatus((prevState) => ({
        ...prevState,
        disLikeLoading: true,
      }));
      if (type)
        updateReplyLikeStatus({
          replyId: data?.replyId,
          liked: 0,
          disLiked: !likeStatus.disLiked,
        });
      else
        updateCommentLikeStatus({
          commentId: data?.commentId,
          liked: 0,
          disLiked: !likeStatus.disLiked,
        });
    }
  };

  useEffect(() => {
    if (commentLikeRes.response) {
      const response = commentLikeRes?.data?.data;
      if (response?.success && !commentLikeRes?.error) {
        if (type === 0) {
          setLikeStatus((prevState) => ({
            ...prevState,
            likeLoading: false,
            disLikeLoading: false,
            likeCount: prevState.likeCount + response?.data?.liked - prevState.liked,
            disLikeCount: prevState.disLikeCount + response?.data?.disLiked - prevState.disLiked,
            liked: response?.data?.liked,
            disLiked: response?.data?.disLiked,
          }));
          resetCommentState('commentLikeStatus');
        }
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [commentLikeRes]);

  useEffect(() => {
    if (replyLikeRes.response) {
      const response = replyLikeRes?.data?.data;
      if (response?.success && !replyLikeRes?.error) {
        if (response?.data?.replyId === data?.replyId) {
          setLikeStatus((prevState) => ({
            ...prevState,
            likeLoading: false,
            disLikeLoading: false,
            likeCount: prevState.likeCount + response?.data?.liked - prevState.liked,
            disLikeCount: prevState.disLikeCount + response?.data?.disLiked - prevState.disLiked,
            liked: response?.data?.liked,
            disLiked: response?.data?.disLiked,
          }));
          resetCommentState('replyLikeStatus');
        }
      } else {
        message.error('some error occured refresh the page!');
      }
    }
  }, [replyLikeRes]);

  return (
    <ColumnContainer style={{ background }}>
      <CommentModal visible={commentModalVisible} setVisible={setCommentModalVisible} type='edit' />
      <ReplyModal
        visible={replyModalVisible}
        setVisible={setReplyModalVisible}
        type={modalType}
        data={data}
      />
      <TwoColumn>
        <LeftColumn>
          <UserBox>
            <Avatar>
              <img tw='rounded-full' src='/images/userimg.png' height='100%' width='100%' />
            </Avatar>
            <Name>{data?.name}</Name>
            <Designation>Student</Designation>
            <IconBox>
              <Icon style={{ color: '#01579b' }} size={22} icon={thumbsUp} />
              <Count>{likeStatus.likeCount || 0}</Count>
              <Icon style={{ color: '#01579b' }} size={22} icon={checkCircle} />
              <Count>{count}</Count>
              <Icon style={{ color: '#01579b' }} size={22} icon={thumbsDown} />
              <Count>{likeStatus.disLikeCount || 0}</Count>
            </IconBox>
            <Designation>
              Message {index} of {count}
            </Designation>
            {/* <IconBox>
              <Icon style={{ color: '#01579b' }} size={28} icon={ic_remove_red_eye} />
              <Count>14</Count>
            </IconBox>
            <PrimaryButtonFollow>Follow</PrimaryButtonFollow> */}
          </UserBox>
        </LeftColumn>
        <RightColumn>
          <Heading>{data?.title}</Heading>
          <Subheading>Posted on ‎{data?.date}</Subheading>
          <Paragraph>{data?.description}</Paragraph>
          <div tw='flex flex-wrap flex-col lg:flex-row mt-auto w-full'>
            <div tw='mt-6 flex flex-wrap'>
              {type === 0 && (
                <PrimaryButtonReply
                  onClick={() => {
                    setModalType('add');
                    setReplyModalVisible(true);
                  }}
                >
                  Reply
                </PrimaryButtonReply>
              )}
              {data?.userId === userId && (
                <>
                  <PrimaryButtonSame
                    onClick={() => {
                      if (type) {
                        setModalType('edit');
                        setReplyModalVisible(true);
                      } else setCommentModalVisible(true);
                    }}
                  >
                    Edit
                  </PrimaryButtonSame>
                  <PrimaryButtonSame loading={loading} onClick={handleDelete}>
                    Delete
                  </PrimaryButtonSame>
                </>
              )}
            </div>
            <div tw='flex flex-wrap mt-6 lg:ml-auto'>
              <LikeBox loading={likeStatus.likeLoading} onClick={() => handleLike('like')}>
                <Icon size={24} icon={likeStatus?.liked ? thumbsUp : thumbsOUp} />
              </LikeBox>
              <LikeBox
                loading={likeStatus.disLikeLoading}
                tw='ml-4'
                onClick={() => handleLike('disLike')}
              >
                <Icon size={24} icon={likeStatus.disLiked ? thumbsDown : thumbsODown} />
              </LikeBox>
            </div>
          </div>
        </RightColumn>
      </TwoColumn>
    </ColumnContainer>
  );
};

function mapStateToProps(state) {
  const { userId } = state.userDetails.userDetails.data;
  return {
    userId,
    deleteCommentsRes: state.comments.deleteComments,
    commentLikeRes: state.comments.updateCommentLikeStatus,
    replyLikeRes: state.comments.updateReplyLikeStatus,
  };
}

export default connect(mapStateToProps, {
  deleteComments,
  deleteReply,
  editReply,
  editComments,
  updateCommentLikeStatus,
  updateReplyLikeStatus,
  resetCommentState,
})(index);
