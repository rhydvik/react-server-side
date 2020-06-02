import React from 'react';
import CountUp from 'react-countup';
import {Col, Row} from 'antd';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <div style={{background: '#fafafa'}}>
      <div
        style={{height: 400, textAlign: 'center', padding: 20, paddingTop: 50}}
      >
        <h1>How it works</h1>
      </div>

      <Row className={styles.countsContainer}>
        <Col span={8} align="center">
          <CountUp start={0} end={632} className={styles.counter} />
          <h1>Bookings</h1>
        </Col>
        <Col span={8} align="center">
          <CountUp start={0} end={234} className={styles.counter} />
          <h1>Orders</h1>
        </Col>
        <Col span={8} align="center">
          <CountUp start={0} end={1200} className={styles.counter} />
          <h1>Counts</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
