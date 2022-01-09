/**
 * 3. 使用声明语句来获取动态的值
 * 每秒打印一个随机的个位数
 */

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const a = interval(1000).pipe(map((_) => Math.random().toFixed(1)));
const b = a.pipe(map((v: any) => v * 10));
b.subscribe(console.log);
