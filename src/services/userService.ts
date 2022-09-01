import axios from 'axios';
import { User } from '../utils/types';

export const getAuthUser = () => {
  return axios.get<User>('/api/auth/status');
};
