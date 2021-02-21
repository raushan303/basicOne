import React, { useState, useEffect } from 'react';
import { Modal, Avatar, Form, Input, Button, Select, message, Switch } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { camera } from 'react-icons-kit/feather/camera';
import Icon from 'react-icons-kit';
import './style.module.css';
const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 9, span: 14 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    // number: '${label} is not a validate number!',
  },
  // number: {
  //   range: '${label} must be between ${min} and ${max}',
  // },
};
const prefixSelector = (
  <Form.Item name='prefix' noStyle>
    <Select style={{ width: 70 }} defaultValue='+91'>
      <Option value='86'>+91</Option>
      <Option value='87'>+87</Option>
    </Select>
  </Form.Item>
);

const inputBox = {
  borderRadius: '8px',
};
const labelText = {
  fontSize: '12px',
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  height: '32px',
  color: 'rgba(0, 0, 0, 0.67)',
  fontFamily: 'Roboto',
};

export default function EditProfile({ visible, setVisible }) {
  const [initialData, setInitialData] = useState(null);
 
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
      width={400}
      className='custom-modal'
    >
      <div style={{ textAlign: 'center' }}>
        <div className='avatar-upload'>
          <div className='avatar-edit'>
            <input
              type='file'
              id='imageUpload'
              // accept=".png, .jpg, .jpeg"
              onChange={(e) => {}}
            />
            <label for='imageUpload'></label>
          </div>
          <Icon
            icon={camera}
            style={{
              color: '#fff',
              position: 'absolute',
              zIndex: 1,
              left: '75px',
              top: '50px',
            }}
            size={35}
            alt=''
          />
          <div className='avatar-preview'>
            <Avatar size={130} src={imageURL} />
            <span
              style={{
                marginLeft: '2rem',
              }}
            ></span>
          </div>
        </div>
      </div>
      <Form
        {...layout}
        name='basic'
        initialValues={initialData}
        validateMessages={validateMessages}
        layout='vertical'
        scrollToFirstError
        style={{ marginTop: '15px' }}
      >
        <label style={labelText}>Name</label>
        <Form.Item name='name' style={{ marginBottom: '12px' }}>
          <Input style={inputBox} />
        </Form.Item>
        <label style={labelText}>Alternate Email</label>
        <Form.Item
          name='alternateEmail'
          // label="Alternate Email"
          rules={[{ type: 'email' }]}
        >
          <Input style={inputBox} />
        </Form.Item>
        <label style={labelText}>Phone Number</label>
        <Form.Item
          name='phone'
          // label="Phone Number"
          rules={[{ required: true }]}
        >
          <Input
            style={inputBox}
            // addonBefore={prefixSelector}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          style={{
            marginTop: '20px',
            marginBottom: '0px',
          }}
        >
          <Button
            style={{
              background: '#EF5350',
              borderRadius: '200px',
              color: '#fff',
              padding: '4px 22px',
              outline: 'none',
            }}
            loading={isLoading}
            htmlType='submit'
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
