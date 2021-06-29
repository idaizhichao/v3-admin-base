import { createApp } from 'vue'
import App from './App.vue'
import router from './route';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "tailwindcss/tailwind.css"
console.log(process.env.NODE_ENV)

createApp(App).use(router).use(ElementPlus).mount('#app')
