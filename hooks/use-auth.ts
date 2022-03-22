import { authApi } from '@/api-client';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

const MS_PER_HOUR = 60 * 60 * 1000;

export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile

  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: MS_PER_HOUR, // 1hr
    revalidateOnFocus: false,
    ...options,
  });

  async function login() {
    await authApi.login({
      username: 'l15c',
      password: '123qwe',
    });

    await mutate();
  }
  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
  };
}
