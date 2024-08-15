/*
 * @Description: 用户相关业务请求接口的函数
 * @Author: laoyuan
 * @Date: 2023-04-20 21:57:35
 */
import { GET, POST } from '../axios/method';
import { UserLoginParams } from './type';
import API from './api';

// 获取用户信息
export function getUserInfo() {
  const params = {
    token: 'aisndastoken',
  };
  return GET(API.APP_user_info, params);
}

// 用户登录
export function userLogin(params: UserLoginParams) {
  return POST(API.APP_user_login, params);
}
