// @flow
import * as React from 'react';
import {Route} from 'react-router-dom';
import {Col, Layout as AntLayout, Row} from 'antd';
import Header from '../../components/Header';

type Props = {
  component: React.ReactNode,
};

const AuthLayout = ({component: Component, ...props}: Props) => {
  return (
    <Route
      {...props}
      render={matchProps => (
        <AntLayout style={{height: '100vh'}}>
          <Header theme="dark" {...matchProps} />
          <Row style={{height: '100%'}}>
            <Col span={12} className="center primaryBg">
              <div>
                <p className="bigText">SOME DUMMY TEXT</p>
                <p className="smallText">SMALL DUMMY TEXT ONE MORE TIME</p>
              </div>
            </Col>
            <Col span={12} className="center whiteBg">
              <Component {...props} {...matchProps} />
            </Col>
          </Row>
        </AntLayout>
      )}
    />
  );
};

export default AuthLayout;
