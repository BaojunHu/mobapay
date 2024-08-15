/*
 * @Description: 商品业务请求接口的函数
 * @Author: laoyuan
 * @Date: 2023-04-20 21:57:35
 */
import { GET } from '../axios/method';
import { ProductParams } from './type';
import API from './api';

// 用户登录
export function getProduct(params: ProductParams) {
  return GET(API.APP_product_list, params);
}
