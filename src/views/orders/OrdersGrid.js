import React from 'react';
import {Row} from 'antd';
import {get} from 'lodash';

import CardLoader from '../../components/Loaders';
import OrderCard from './OrderCard';

type Props = {
  orders: Array<Object>,
  isLoading: boolean,
};

const OrdersGrid = ({orders, isLoading}: Props) => {
  return (
    <>
      {isLoading && <CardLoader />}
      {!isLoading && (
        <Row justify="center">
          {orders.map(order => (
            <OrderCard key={get(order, '_id')} order={order} />
          ))}
        </Row>
      )}
    </>
  );
};

export default OrdersGrid;
