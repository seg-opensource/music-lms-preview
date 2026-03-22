import { defineNuxtModule, addComponentsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'multi-instrument',
    roles: ['student', 'teacher']
  },

  setup() {
    addComponentsDir({
      path: './ui'
    })
  }
})
