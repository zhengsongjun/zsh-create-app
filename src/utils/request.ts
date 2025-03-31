import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// 请求拦截器
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 添加 token
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, data, message: msg } = response.data;

    // 统一业务成功判断
    if (code === 0 || code === 200) {
      return data;
    } else {
      message.error(msg || '请求失败');
      return Promise.reject(response.data);
    }
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        message.error('请先登录');
        // TODO: 跳转登录页
      } else {
        message.error(error.response.data?.message || '服务器异常');
      }
    } else {
      message.error('网络连接失败');
    }
    return Promise.reject(error);
  }
);

export default request;
