/*
 * @Description: 上传下载文件相关业务请求接口的函数
 * @Author: laoyuan
 * @Date: 2023-04-20 21:57:35
 */

import { GET, uploadFile } from '../axios/method';
import API from './api';

// 用户下载文件
export function downFile() {
  return GET(API.APP_download_file);
}

// 上传图片-可上传多文件
export function uploadImage(params: FormData) {
  return uploadFile(API.APP_upload_file, params);
}
