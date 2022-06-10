import { DocusThemeConfig } from './.nuxt/types/theme'

/**
 * From here you can specify all the configurations that you want to use for your theme.
 * 
 * You can access these via `const { theme } = useDocus()` anywhere in your app.
 * 
 */
const theme: Partial<DocusThemeConfig> = {
  themeName: '@strapi-community/docus-theme',
  layout: 'docs',

  socials: {
    github: '',
    twitter: '',
  },
  github: {
    root: 'content',
    edit: true,
  },
  aside: {
    level: 0,
    filter: [],
  },
  header: {
    title: '@strapi-community/docus-theme',
    logo: true,
  },
  footer: {
    credits: {},
    icons: [
      {
        label: '',
        href: 'https://maket.strapi.io',
        component: 'IconStrapiMarketplace',
        class: 'h-6 w-auto'
      },
      {
        label: '',
        href: 'https://docs.strapi.io',
        component: 'IconStrapiDocV4',
        class: 'h-6 w-auto'
      },
    ],
  },

}
export default theme