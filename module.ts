import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@strapi-community/docus-theme',
    version: '1.0.0',
    compatibility: {
      nuxt: '^3.0.0-rc.3',
      bridge: false,
    },
    configKey: 'strapi-community',
  },
  setup(_, nuxt) {
    console.log('setup @strapi-community/docus-theme')
    // const { srcDir } = nuxt.options

    // // @ts-expect-error - Push content dir
    // nuxt.options.tailwindcss.config.content.push(`${srcDir}/content/**/*.{md,yml,json,json5,csv}`)
  },
})
