/**
 * 4. 使用 rxjs 处理网络请求
 * 向 GitHub API 发送一次请求，获取一组用户信息，并随机显示其中 3 名用户的头像和用户名
 * 每 10 秒更新一次显示的头像和用户名，或每次点击按钮更新一次
 */

import { fromEvent, interval, from, merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

document.getElementById('app').innerHTML = `
  <button id="button">Click me</button>
  <ul>
    <li class="user user1"><img /><a href="#" class="username">no user</a></li>
    <li class="user user2"><img /><a href="#" class="username">no user</a></li>
    <li class="user user3"><img /><a href="#" class="username">no user</a></li>
  </ul>
`;

const btn = document.getElementById('button');
const click = fromEvent(btn, 'click');
const inner = interval(3000);
const request = from(
  fetch('https://api.github.com/users').then((res) => res.json())
);
const response = merge(click, inner).pipe(mergeMap((_) => request));
response.subscribe((v) => {
  render(v, '.user1');
  render(v, '.user2');
  render(v, '.user3');
});

function render(data, selector) {
  const userData = data[Math.floor(Math.random() * data.length)];
  const element = document.querySelector(selector);
  const userEle = element.querySelector('.username');

  userEle.textContent = userData.login;

  const imgEle = element.querySelector('img');
  imgEle.src = userData.avatar_url;
}
