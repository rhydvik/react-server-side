import React from 'react';

import styles from './styles.module.scss';
import {Col, Row} from 'antd';

const Footer = () => (
  <div className={styles.container}>
    <Row>
      <Col span={4}>
        <p style={{fontSize: 20, fontWeight: 800}}>TheShape</p>
      </Col>
    </Row>
  </div>
);

export default Footer;
