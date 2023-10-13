import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  actions: {
    setToken(str) {
      this.token = str
    }
  }
})