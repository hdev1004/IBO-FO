import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import ElementPlus from 'element-plus'

import App from '@/App.vue'
import router from '@/router/index'
import 'element-plus/dist/index.css'

const app = createApp(App)

/** Pinia **/
/** https://pinia.vuejs.org/ **/
const pinia = createPinia()
app.use(pinia)

/** Vue Router **/
/** https://router.vuejs.org/ **/
app.use(router)
app.use(ElementPlus)

/** Unhead **/
/** https://unhead.unjs.io/ **/
const head = createHead()
app.use(head)

app.mount('#app')
