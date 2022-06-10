import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'
import theme from './theme'

// Custom resolve function to resolve theme files locally
const themeDir = fileURLToPath(new URL('./', import.meta.url))
const resolveThemeDir = (path: string) => resolve(themeDir, path)

const components = [
  {
    prefix: '',
    path: resolveThemeDir('./components/app'),
    global: true,
  },
  {
    prefix: '',
    path: resolveThemeDir('./components/content'),
    global: true,
  },
  {
    prefix: '',
    path: resolveThemeDir('./components/icons'),
    global: true,
  },
]

export default defineNuxtConfig({
  // Extends `@docus/base`
  // extends: [resolveThemeDir('../@docus/base')],
  extends: ['./node_modules/@docus/docs-theme'],
  modules: [],

  components,
  theme,

  tailwindcss: {
    config: {
      content: [
        // resolveThemeDir('assets/**/*.{mjs,vue,js,ts}'),
        resolveThemeDir('components/**/*.{mjs,vue,js,ts}'),
        // resolveThemeDir('layouts/**/*.{mjs,vue,js,ts}'),
        resolveThemeDir('pages/**/*.{mjs,vue,js,ts}'),
        resolveThemeDir('./theme.ts'),
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              100: '#FFFFFF',
              200: '#F2EFFF',
              300: '#D1C7FF',
              400: '#AF9EFF',
              500: '#8E75FF', // strapi primary color
              600: '#603DFF',
              700: '#3205FF',
              800: '#2500CC',
              900: '#1B0094',
            }
          }
        }
      }
    }
  },
  app: {
    head: {
      title: 'Strapi plugin documentation',
      meta: [
        { hid: 'og:site_name', property: 'og:site_name', content: 'Strapi plugin documentation' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      link: [
        { hid: 'icon/svg', rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { hid: 'icon/png', rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    },
  },
})
