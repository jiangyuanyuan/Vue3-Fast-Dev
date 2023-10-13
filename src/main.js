import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Router'
import i18n from './i18n/index'
import { createPinia } from 'pinia';



const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)




app.mount('#app')
