import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Modal, Input, Form, Button, message } from 'antd';

const Container = tw.div`p-12`;
import { connect } from 'react-redux';
import { uploadReply } from '../../../redux/action/getComments';

function index({
  visible,
  setVisible,
  uploadReply,
  uploadReplyRes,
  activeSubtopic,
  activeComment,
  addReply,
  setCount,
}) {
  const [replyData, setReplyData] = useState({ title: '', description: '', imageList: [] });
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    if (replyData.title !== '' && replyData.description !== '') {
      if (
        (activeSubtopic?.subtopicId === 0 || activeSubtopic?.subtopicId) &&
        (activeComment?.commentId === 0 || activeComment?.commentId)
      ) {
        // let todayDate = new Date().toISOString().slice(0, 10);
        let todayDate = new Date().toLocaleString();

        uploadReply({
          ...replyData,
          subtopicId: activeSubtopic?.subtopicId,
          commentId: activeComment?.commentId,
          date: todayDate,
        });
        setLoading(true);
      } else {
        message.error('something went wrong refresh the page!');
      }
    } else {
      message.error('fill the boxes');
    }
  };
  useEffect(() => {
    if (uploadReplyRes.response) {
      const response = uploadReplyRes?.data?.data;
      if (response?.success && !uploadReplyRes?.error) {
        message.success('Reply uploaded successfully!');
        addReply(response?.data);
        setCount((prevState) => prevState + 1);
        setLoading(false);
        setReplyData({ title: '', description: '', imageList: [] });
      } else {
        message.error('some error occured try again!');
      }
    }
  }, [uploadReplyRes]);

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
            Post
          </Button>
        </Form>
      </Container>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    uploadReplyRes: state.comments.uploadReply,
    activeSubtopic: state.coursesStats.activeSubtopic.data,
    activeComment: state.comments.activeComment.data,
  };
}

export default connect(mapStateToProps, {
  uploadReply,
})(index);
