import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';

createApp(App)
    .use(Vue3Toasity, { autoClose: 3000 } as ToastContainerOptions)
    .use(createPinia())
    .use(router)
    .mount('#app')
