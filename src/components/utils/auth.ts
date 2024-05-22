import { jwtDecode } from 'jwt-decode'

export const getAccessToken = () => localStorage.getItem('accessToken');

export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;
  try {
    const { exp } = jwtDecode<{ exp: number }>(token)
    if (Date.now() >= exp * 1000) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};


