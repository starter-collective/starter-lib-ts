import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site config.
  // https://vitepress.dev/reference/site-config
  title: 'TypeScript Library Starter Template',
  description: 'TypeScript library starter template that provides VitePress online docs, supports building ESM and CJS formats.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Functions', link: '/functions' },
      { text: 'Changelog', link: 'https://github.com/starter-collective/starter-lib-ts/releases' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/guide' },
        ],
      },
      {
        text: 'Functions',
        items: [
          { text: 'Say Hello', link: '/functions/say-hello' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/starter-collective/starter-lib-ts' },
    ],
    search: {
      provider: 'local',
    },

  },
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  // Vite config.
  // https://vitejs.dev
  vite: {
    server: {
      host: true,
      port: 9865,
    },
    preview: {
      host: true,
      port: 9865,
    },
  },
})
