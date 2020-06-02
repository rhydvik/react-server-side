import React, {useState} from 'react';
import {Form, Input, Button} from 'antd';
import {Link} from 'react-router-dom';

import styles from './style.module.scss';

type Props = {
  goToDashboard: Function,
};

const LoginForm = ({goToDashboard}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async values => {
    setIsLoading(true);
    if (isPasswordVisible) {
      goToDashboard();
    } else {
      setIsPasswordVisible(true);
    }
    setIsLoading(false);
  };

  const onFinishFailed = () => {};

  return (
    <div>
      <h1>Log In</h1>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="emailOrPhone"
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
        {isPasswordVisible && (
          <Form.Item
            label="Password"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
            style={{marginBottom: 0}}
          >
            <Input.Password style={{width: 400, height: 50}} />
          </Form.Item>
        )}
        <div className={styles.forgotLink}>
          <Link to="/forgot/password">Forgot password?</Link>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={isLoading}
          >
            LOG IN
          </Button>
        </Form.Item>
        <Link to="/dashboard">Go To Dashboard </Link>
      </Form>
    </div>
  );
};

export default LoginForm;
