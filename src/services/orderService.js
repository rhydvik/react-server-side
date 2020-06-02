import qs from 'qs';
import {secureApi} from '../api/xhr';

export const getOrders = async merchantId =>
  await secureApi.post('/order/find', qs.stringify({query: {merchantId}}));
