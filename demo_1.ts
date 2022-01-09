/**
 * 1. 使用 rxjs 处理数组
 * 每秒依次打印数组 array 中的值
 * 将能够转换为 Number 的值相加，并打印总和
 */

import { interval } from 'rxjs';
import { map, filter, take, reduce } from 'rxjs/operators';

const array = ['2', 3, '23', 'a', '8b', 8, 0, 73, 'name'];
const source = interval(1000).pipe(
  take(array.length),
  map((i) => array[i])
);

source.subscribe(console.log);

const obs = source.pipe(
  map((v: string) => parseInt(v, 10)),
  filter((v) => !isNaN(v)),
  reduce((acc, cur) => acc + cur)
);

obs.subscribe(console.log);
