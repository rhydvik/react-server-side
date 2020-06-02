// @flow
import * as React from 'react';
import {Route} from 'react-router-dom';
import {Layout as AntLayout} from 'antd';

import Sidebar from '../../components/Sidebar/Sidebar';
import DashboardHeader from '../../components/DashboardHeader';

type Props = {
  component: React.ReactNode,
};

const DefaultLayout = ({component: Component, ...props}: Props) => {
  return (
    <Route
      {...props}
      render={matchProps => (
        <AntLayout style={{minHeight: '100vh'}}>
          <Sidebar {...matchProps} />
          <AntLayout style={{marginLeft: 250}}>
            <DashboardHeader />
            <AntLayout style={{padding: 20}}>
              <Component {...matchProps} {...props} />
            </AntLayout>
          </AntLayout>
        </AntLayout>
      )}
    />
  );
};

export default DefaultLayout;
