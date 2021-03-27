import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Modal, Input, Form, Button, message } from 'antd';

const Container = tw.div`p-12`;
import { connect } from 'react-redux';
import { uploadComments } from '../../../redux/action/getComments';

function index({
  visible,
  setVisible,
  uploadComments,
  uploadCommentsRes,
  activeSubtopic,
  addComment,
}) {
  const [commentData, setCommentData] = useState({ title: '', description: '', imageList: [] });
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    if (commentData.title !== '' && commentData.description !== '') {
      // console.log(activeSubtopic);
      if (activeSubtopic?.subtopicId === 0 || activeSubtopic?.subtopicId) {
        // let todayDate = new Date().toISOString().slice(0, 10);
        let todayDate = new Date().toLocaleString();
        uploadComments({ ...commentData, subtopicId: activeSubtopic?.subtopicId, date: todayDate });
        setLoading(true);
      } else {
        message.error('select video');
      }
    } else {
      message.error('fill the boxes');
    }
  };
  useEffect(() => {
    if (uploadCommentsRes.response) {
      const response = uploadCommentsRes?.data?.data;
      if (response?.success && !uploadCommentsRes?.error) {
        message.success('comment uploaded successfully!');
        addComment(response?.data);
        setCommentData({ title: '', description: '', imageList: [] });
        setLoading(false);
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
            Post
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
  };
}

export default connect(mapStateToProps, {
  uploadComments,
})(index);
