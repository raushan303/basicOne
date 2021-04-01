import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Modal, Input, Form, Button, message } from 'antd';

const Container = tw.div`p-12`;
import { connect } from 'react-redux';
import {
  uploadComments,
  resetCommentState,
  updateActiveComment,
  editComments,
} from '../../../redux/action/getComments';

function index({
  type,
  visible,
  setVisible,

  uploadComments,
  uploadCommentsRes,
  editComments,
  editCommentsRes,

  activeSubtopic,
  addComment,
  resetCommentState,

  activeComment,
  updateActiveComment,
}) {
  const [commentData, setCommentData] = useState({ title: '', description: '', imageList: [] });
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (commentData.title !== '' && commentData.description !== '') {
      if (activeSubtopic?.subtopicId === 0 || activeSubtopic?.subtopicId) {
        if (type === 'add') {
          let todayDate = new Date().toLocaleString();
          todayDate = todayDate.replaceAll('/', '-');
          uploadComments({
            ...commentData,
            subtopicId: activeSubtopic?.subtopicId,
            date: todayDate,
          });
        } else {
          editComments({ ...commentData, commentId: activeComment?.commentId });
        }
        setLoading(true);
      } else {
        message.error('select video');
      }
    } else {
      message.error('fill the boxes');
    }
  };

  useEffect(() => {
    if (editCommentsRes.response) {
      const response = editCommentsRes?.data?.data;
      if (response?.success && !editCommentsRes?.error) {
        message.success('comment edited successfully!');
        updateActiveComment({ ...activeComment, ...response?.data });
        setLoading(false);
        resetCommentState('editComments');
      } else {
        message.error('some error occured try again!');
      }
    }
  }, [editCommentsRes]);

  useEffect(() => {
    if (type === 'edit') {
      setCommentData({
        title: activeComment?.title,
        description: activeComment?.description,
        imageList: activeComment?.imageList,
      });
    }
  }, [type]);

  useEffect(() => {
    if (uploadCommentsRes.response) {
      const response = uploadCommentsRes?.data?.data;
      if (response?.success && !uploadCommentsRes?.error) {
        message.success('comment uploaded successfully!');
        addComment(response?.data);
        setCommentData({ title: '', description: '', imageList: [] });
        setLoading(false);
        resetCommentState('uploadComments');
      } else {
        message.error('some error occured try again!');
      }
    }
  }, [uploadCommentsRes]);

  const handleInputChange = (field) => (e) => {
    setCommentData((prevState) => ({
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
            <Input value={commentData.title} onChange={handleInputChange('title')} />
          </Form.Item>
          <Form.Item label='Description'>
            <Input.TextArea
              value={commentData.description}
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
    uploadCommentsRes: state.comments.uploadComments,
    activeSubtopic: state.coursesStats.activeSubtopic.data,
    editCommentsRes: state.comments.editComments,
    activeComment: state.comments.activeComment.data,
  };
}

export default connect(mapStateToProps, {
  uploadComments,
  resetCommentState,
  updateActiveComment,
  editComments,
})(index);
