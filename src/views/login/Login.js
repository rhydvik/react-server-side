import React from 'react';

import LoginForm from './LoginForm';

type Props = {
  history: Object,
};

const Login = ({history}: Props) => {
  const goToDashboard = () => {
    history.push('/dashboard');
  };
  return <LoginForm goToDashboard={goToDashboard} />;
};

export default Login;
