import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Modal, Input, Form, Button, message } from 'antd';

const Container = tw.div`p-12`;
import { connect } from 'react-redux';
import { uploadReply, resetCommentState, editReply } from '../../../redux/action/getComments';

function index({
  type,
  data,

  visible,
  setVisible,

  uploadReply,
  uploadReplyRes,
  editReply,
  editReplyRes,
  activeSubtopic,
  activeComment,
  resetCommentState,
}) {
  const [replyData, setReplyData] = useState({ title: '', description: '', imageList: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (type === 'edit') {
      setReplyData({
        title: data?.title,
        description: data?.description,
        imageList: data?.imageList,
      });
    }
  }, [type]);

  useEffect(() => {
    if (uploadReplyRes.response) {
      const response = uploadReplyRes?.data?.data;
      if (response?.success && !uploadReplyRes?.error) {
        message.success('Reply uploaded successfully!');
        setLoading(false);
        setReplyData({ title: '', description: '', imageList: [] });
        resetCommentState('uploadReply');
      } else {
        message.error('some error occured try again!');
      }
    }
  }, [uploadReplyRes]);

  useEffect(() => {
    if (editReplyRes.response) {
      const response = editReplyRes?.data?.data;
      if (response?.success && !editReplyRes?.error) {
        message.success('edited successfully!');
        setLoading(false);
        resetCommentState('editReply');
      } else {
        message.error('some error occured try again!');
      }
    }
  }, [editReplyRes]);

  const handleSubmit = () => {
    if (replyData.title !== '' && replyData.description !== '') {
      if (
        (activeSubtopic?.subtopicId === 0 || activeSubtopic?.subtopicId) &&
        (activeComment?.commentId === 0 || activeComment?.commentId)
      ) {
        if (type === 'add') {
          let todayDate = new Date().toLocaleString();
          todayDate = todayDate.replaceAll('/', '-');
          uploadReply({
            ...replyData,
            subtopicId: activeSubtopic?.subtopicId,
            commentId: activeComment?.commentId,
            date: todayDate,
          });
        } else {
          editReply({ ...replyData, replyId: data?.replyId });
        }
        setLoading(true);
      } else {
        message.error('something went wrong refresh the page!');
      }
    } else {
      message.error('fill the boxes');
    }
  };

  const handleInputChange = (field) => (e) => {
    setReplyData((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  return (
    <Modal
      header={null}
      footer={null}
      width={600}
      visible={visible}
      onCancel={() => setVisible(false)}
    >
      <Container>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 24 }} layout='vertical'>
          <Form.Item label='Title'>
            <Input value={replyData.title} onChange={handleInputChange('title')} />
          </Form.Item>
          <Form.Item label='Description'>
            <Input.TextArea
              value={replyData.description}
              onChange={handleInputChange('description')}
            />
          </Form.Item>
          <Button loading={loading} onClick={handleSubmit}>
            {type === 'add' ? 'Post' : 'Edit'}
          </Button>
        </Form>
      </Container>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    uploadReplyRes: state.comments.uploadReply,
    editReplyRes: state.comments.editReply,
    activeSubtopic: state.coursesStats.activeSubtopic.data,
    activeComment: state.comments.activeComment.data,
  };
}

export default connect(mapStateToProps, {
  uploadReply,
  resetCommentState,
  editReply,
})(index);
