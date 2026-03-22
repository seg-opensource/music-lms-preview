import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    role: 'student'
  }),

  getters: {
    canAccess: (state) => (meta) => {
      return !meta?.roles || meta.roles.includes(state.role)
    }
  }
})
