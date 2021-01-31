# Deno 分享

Deno 并不是下一代 Node.js

初学者应该学习 Node.js 还是 Deno？

使用 Node。Deno 只是一个原型或实验性产品。

Deno 的目标是不兼容 Node，而是兼容浏览器。

Ryan Dahl 离开 Node.js 去了 Golang 社区，但是现在 Ryan Dahl 又回来了，为 JavaScript 社区带来了 Golang，开发出了 Deno，然后拥抱浏览器生态。

Deno 是一个跨平台的运行时，即基于 Google V8 引擎的运行时环境，该运行时环境是使用 Rust 语言开发的，并使用 Tokio 库来构建事件循环系统。Deno 建立在 V8、Rust 和 Tokio 的基础上

开时遇到的问题

Deno 为什么把核心模块从 ts 改回了 js

当年 rust 从 go 换到 rust 一样，使用 go 会带来 double gc 问题(go gc 和 v8 gc)，Deno 当时看似有 4 条路：解决 go gc，解决 v8 gc，换掉 go，换掉 v8。其实只有一条路，换掉 go

还有一些场景不太适合 ts：经常修改原型链的，需要运行时动态添加属性的

大多数项目而言，ts 生产的 js 代码还是非常优秀的。

主要是性能问题性能
