import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'TypeScript library starter template that provides VitePress documentation, supports building ESM and CJS formats.',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/starter-collective/starter-lib-ts/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Guide', link: '/guide/what-is', activeMatch: '/guide/' },
      { text: 'Functions', link: '/functions', activeMatch: '/functions/' },
      { text: 'Changelog', link: 'https://github.com/starter-collective/starter-lib-ts/releases' },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'What is starter-lib-ts?', link: '/guide/what-is' },
          { text: 'Get Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Functions',
        collapsed: false,
        items: [
          { text: 'Say Hello', link: '/functions/say-hello' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kieran Wang',
    },
  },
})
