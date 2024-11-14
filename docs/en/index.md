---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: starter-lib-ts
  text: TypeScript Library Starter Template
  tagline: Provides VitePress online docs, supports building ESM, CJS and IIFE formats.
  image:
    src: /logo.png
    alt: Logo Image
    width: 200px
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Source Code
      link: https://github.com/starter-collective/starter-lib-ts

features:
  - title: Bundle with tsup
    details: Build package with tsup - Bundle your TypeScript library with no config.
  - title: Unit Test
    details: Out-of-the-box unit testing with Vitest.
  - title: VitePress online docs
    details: Deploy on Netlify with zero-config, supports other deployment methods as well.
  - title: Publish & Version
    details: Manage versions using the CLI, and publish to npm with zero-config
---
