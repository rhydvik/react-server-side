import React from 'react';
import {Layout} from 'antd';
import {LoginOutlined} from '@ant-design/icons';

import styles from './style.module.scss';
// import {logo_apn} from '../../assets';

const Header = () => {
  return (
    <Layout.Header className={styles.container} theme="light">
      <span className={styles.buttonContainer}>
        <LoginOutlined />
      </span>
    </Layout.Header>
  );
};

export default Header;
