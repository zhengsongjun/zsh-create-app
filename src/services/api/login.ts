import request from '@/utils/request';

export const getUserList = () => {
  return request.get('/users');
};

export const login = (data: { username: string; password: string }) => {
  return request.post('/auth/login', data);
};
