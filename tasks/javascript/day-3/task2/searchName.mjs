import { filterArr, limitArr } from './utils.mjs';

export default function searchName(str, limit, callback) {
  let arr = filterArr(callback(), str);
  return limitArr(arr, limit);  
}

