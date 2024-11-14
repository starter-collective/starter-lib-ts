---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "starter-lib-ts"
  text: TypeScript 库启动模板
  tagline: 提供 VitePress 在线文档，支持构建 ESM 和 CJS 格式。
  image:
    src: /logo.png
    alt: Logo 图片
    width: 200px
  actions:
    - theme: brand
      text: 开始使用
      link: /zh/guide/getting-started
    - theme: alt
      text: 源代码
      link: https://github.com/starter-collective/starter-lib-ts

features:
  - title: 使用 tsup 打包
    details: 使用 tsup 构建包 - 无需配置即可打包您的 TypeScript 库。
  - title: 单元测试
    details: 开箱即用的 Vitest 单元测试。
  - title: VitePress 在线文档
    details: 零配置部署到 Netlify，也支持其他部署方法。
  - title: 发布和版本管理
    details: 使用 CLI 管理版本，并零配置发布到 npm。
---
