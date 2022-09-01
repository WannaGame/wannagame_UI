import { atom, RecoilState } from 'recoil';
import { User } from './utils/types';

export const userState: RecoilState<User> = atom({
  key: 'userState',
  default: <User>{},
});
