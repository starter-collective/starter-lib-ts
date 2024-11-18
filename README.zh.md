# TypeScript 库启动模板

[![Version](https://img.shields.io/github/v/release/starter-collective/starter-lib-ts?style=flat&label=released&color=%2309090b)](https://github.com/starter-collective/starter-lib-ts/releases)
[![Version](https://img.shields.io/npm/v/starter-lib-ts?style=flat&label=npm&color=09090b)](https://www.npmjs.com/package/starter-lib-ts)

TypeScript 库启动模板，提供 VitePress 在线文档，支持构建 ESM、CJS 和 IIFE 格式。

- [在线文档](https://starter-lib-ts.netlify.app/)
- [在 Stackblitz 上试用](https://stackblitz.com/github/starter-collective/starter-lib-ts)
- [简体中文的 README](./README.zh-CN.md)

## 特性

- 使用 [tsup](https://tsup.egoist.dev/) 构建包 - 无需配置即可打包 TypeScript 库。
- 开箱即用的 [Vitest](https://github.com/vitest-dev/vitest) 单元测试。
- [VitePress](https://vitepress.dev/) 文档 - 零配置部署到 [Netlify](https://app.netlify.com/)，并支持其他部署方式。
- 使用 [bumpp](https://github.com/antfu-collective/bumpp) 进行管理版本，同时零配置发布到 [npm](https://www.npmjs.com)。

## 使用方法

从 GitHub 上 [创建一个仓库](https://github.com/starter-collective/starter-lib-ts/generate) 基于此模板。

```bash
git clone <git 远程地址>
```

安装 npm 依赖。

```bash
cd starter-lib-ts # 或者你的项目目录

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

运行 `dev` 脚本来构建你的文件。

```bash
pnpm dev
```

要打开库的在线文档，你可以运行：

```bash
pnpm docs:dev
```

要构建库，你可以运行：

```bash
pnpm build
```

如果你想发布库，可以运行：

```bash
pnpm release
```

## 清理模板

如果你更喜欢手动操作并保持更清晰的 git 历史记录：

```bash
npx degit starter-collective/starter-lib-tsbstarter-lib-tsr-lib-ts

cd starter-lib-ts

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

使用此模板时，请按照以下检查列表正确更新信息：

- [ ] 更改 `LICENSE` 中的作者姓名。
- [ ] 更改 `package.json` 中的包名。
- [ ] 更改 `docs/*` 中的网站信息。

## 许可证

[MIT 许可证](./LICENSE) © 2024-PRESENT [Kieran Wang](https://github.com/kieranwv/)
