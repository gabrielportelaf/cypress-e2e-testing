import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    env: {
      stgUrl: 'http://automationpratice.com.br',
      environment: 'staging',
    },
},
});