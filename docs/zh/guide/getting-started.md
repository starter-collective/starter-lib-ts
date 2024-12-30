# 立即开始

本节将帮助您设置并开始使用 `starter-lib-ts`。

## 使用包管理器

::: code-group

```sh [npm]
npm install starter-lib-ts
```

```sh [yarn]
yarn add starter-lib-ts
```

```sh [pnpm]
pnpm install starter-lib-ts
```
:::

## 浏览器直接引入

```js
<script src="https://unpkg.com/starter-lib-ts"></script>
```

它将作为 `window.StarterLibTs` 暴露在全局对象中。

## 使用示例

只需要从 `starter-lib-ts` 导入所需的函数。

```js
import { sayHello } from 'starter-lib-ts'

sayHello('Kieran')
```

更多内容请参考[函数列表](/functions/index)。
