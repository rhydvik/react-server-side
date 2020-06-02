import React from 'react';
import {Button, Form, Input} from 'antd';
// import {emailExpression} from '../../constants';

const SignUpForm = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Form
        name="login"
        layout="vertical"
        onFinish={() => {}}
        onFinishFailed={() => {}}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{required: true, message: 'Please input your name!'}]}
        >
          <Input style={{width: 400, height: 50}} />
        </Form.Item>
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

        <Form.Item
          label="Password"
          name="password"
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password style={{width: 400, height: 50}} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
