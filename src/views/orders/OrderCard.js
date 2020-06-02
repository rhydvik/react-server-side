import React from 'react';
import {Card} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';

type Props = {
  order: Object,
};

const OrderCard = ({order}: Props) => (
  <Card
    hoverable
    style={{width: 300, marginRight: 20, marginBottom: 20}}
    actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
    tabBarStyle={{border: '1px solid red'}}
  >
    <Card.Meta title="This is order card" description="order" />
    <div style={{height: 300}}></div>
  </Card>
);

export default OrderCard;
