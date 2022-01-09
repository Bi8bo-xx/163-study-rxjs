/**
 * 2. 使用 rxjs 监听 dom
 * 监听按钮点击事件，并设置节流，每 2 秒最多只相应一次
 */

import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

document.getElementById('app').innerHTML = `
  <button id="button">Click me</button>
`;

const btn = document.getElementById('button');
const obs = fromEvent(btn, 'click').pipe(throttleTime(2000));
obs.subscribe(console.log);
