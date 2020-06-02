import React from 'react';
import {Row, Card} from 'antd';

const CardLoader = () => (
  <Row justify="start">
    {[...new Array(10)].map((item, i) => (
      <Card
        key={`card-key-${i}`}
        style={{height: 350, width: 300, marginRight: 20, marginBottom: 20}}
        loading={true}
      />
    ))}
  </Row>
);

export default CardLoader;
