// @flow
import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {Layout as AntLayout} from 'antd';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

type Props = {
  component: React.ReactNode,
};

const SimpleLayout = ({component: Component, ...props}: Props) => {
  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log(JSON.parse(user), 'user');
  }, []);

  return (
    <Route
      {...props}
      render={matchProps => (
        <AntLayout style={{minHeight: '100vh', background: 'white'}}>
          <Header {...matchProps} />
          <Banner />
          <Component {...matchProps} {...props} />
          <Footer />
        </AntLayout>
      )}
    />
  );
};

export default SimpleLayout;
