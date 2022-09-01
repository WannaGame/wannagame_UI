import { useEffect, useState } from 'react';
import { getAuthUser } from '../../services/userService';
import { useRecoilState } from 'recoil';
import { User } from '../types';
import { userState } from '../../recoilStore';

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useRecoilState<User>(userState);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        setUser(data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err: any) => {
        if (err.code === 'ERR_BAD_REQUEST' && err.response.status === 403) {
          setUser(<User>{});
          console.log('lost user auth, back to home');
        } else {
          console.log(err);
        }
        setTimeout(() => setLoading(false), 1000);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { user, loading };
}
