/*
 * @Description: 所有接口入参配型定义
 * @Author: laoyuan
 * @Date: 2023-04-26 22:22:33
 */
/** 用户信息 */
export interface UserLoginParams {
  mobile: number;
  code: number;
  email?: string;
  username?: string;
}

// 商品数据
export type ProductParams = {
  id: number;
};
