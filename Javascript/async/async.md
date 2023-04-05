[阮老师 async 教学](https://es6.ruanyifeng.com/#docs/async)

async 函数返回值是一个 Promise

```javascript
const a = async () => {
  try {
    return c;
  } catch (e) {
    console.log('1', e);
    return Promise.reject(123); // 会被 catch 捕获
  }
};

const b = async () => {
  try {
    const value = await a();
    console.log('b', value);
  } catch (e) {
    console.log('b1', e);
  }
};

b();
```

- async 函数内部的 return 值会成为 then 方法的参数
- `async 内部抛出的错误会导致 Promise 对象变为 reject 状态，会被 catch 捕捉`
- await 后面如果不是 Promise 或 类 Promise 对象，则返回原值
- async 函数可以保留运行堆栈

---

实现一个定时器

```javascript
const sleep = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

const wait = async (delay) => {
  console.log('等待开始');
  await sleep(5000);
  console.log('等待结束');
};

wait();
```
