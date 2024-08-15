/*
 * @Description: 对象key类型测试
 * @Author: laoyuan
 * @Date: 2023-04-01 14:05:11
 */
const yuan = 100;

/* 函数 */
function add(): number {
  return yuan;
}

type ObjParams = {
  yuan: number;
} & Recordable;

const obj: ObjParams = {
  yuan: yuan,
  name: 'aaaa',
};
// 函数
export function add1(options: Recordable) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = options[key];
    }
  }
}
export default add;
