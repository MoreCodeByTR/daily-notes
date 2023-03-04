# React

1、什么是纯函数（pure function）？

能够满足下面两个特性[click here](https://en.wikipedia.org/wiki/Pure_function)

- 确定的输入对应确定的输出
- 函数没有副作用，不会改变输入

---

2、setState 可能是异步更新的

可以在 setState 中传递一个函数以获得 state 的最新值
