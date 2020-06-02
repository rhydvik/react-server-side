import {authApi} from '../api/xhr';
import qs from 'qs';

export const login = async data =>
  await authApi.post('/merchant/login', qs.stringify(data));

export const checkIfUserExist = async data =>
  await authApi.post('/merchant/checkMerchantUsername', qs.stringify(data));
