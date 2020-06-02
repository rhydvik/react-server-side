/* @flow */
import React, {useState, useEffect} from 'react';

import {getOrders} from '../../services/orderService';
import {errorHandler} from '../../utils/errorHandler';
import OrdersGrid from './OrdersGrid';

const MyOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([...new Array(100)]);

  useEffect(() => {
    setIsLoading(true);
    getOrders('5e2d6518f197453e90af4871')
      .then(({data}) => {
        setOrders(data);
      })
      .catch(errorHandler)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(orders);
  return (
    <>
      <h1>Orders</h1>
      <OrdersGrid orders={orders} isLoading={isLoading} />
    </>
  );
};

export default MyOrders;
