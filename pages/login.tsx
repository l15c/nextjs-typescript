import { authApi } from '@/api-client';
import { useAuth } from '@/hooks';
import * as React from 'react';

export default function LoginPage() {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    try {
      await login();

      console.log('redirect to dashboard');
    } catch (error) {
      console.log('failed to login', error);
    }
  }

  async function handleGetProfileClick() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('failed to get profile', error);
    }
  }

  async function handleLogoutClick() {
    try {
      await logout();
    } catch (error) {
      console.log('failed to get profile', error);
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
