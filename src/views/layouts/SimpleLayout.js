// @flow
import * as React from 'react';
import {Route} from 'react-router-dom';
import {Layout as AntLayout} from 'antd';

type Props = {
  component: React.ReactNode,
};

const SimpleLayout = ({component: Component, ...props}: Props) => {
  return (
    <Route
      {...props}
      render={matchProps => (
        <AntLayout style={{minHeight: '100vh'}}>
          <AntLayout>
            <Component {...matchProps} {...props} />
          </AntLayout>
        </AntLayout>
      )}
    />
  );
};

export default SimpleLayout;
