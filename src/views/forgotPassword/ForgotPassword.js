import React from 'react';
import {Button, Form, Input} from 'antd';
// import {emailExpression} from '../../constants';
import {Link} from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot Password?</h1>
      <p>Please enter your email below, we'll send a reset link.</p>
      <Form
        name="forgot-password"
        layout="vertical"
        onFinish={() => {}}
        onFinishFailed={() => {}}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              // pattern: emailExpression,
            },
          ]}
        >
          <Input style={{width: 400, height: 50}} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            SUBMIT
          </Button>
        </Form.Item>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </Form>
    </div>
  );
};

export default ForgotPassword;
