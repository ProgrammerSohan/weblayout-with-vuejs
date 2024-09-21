import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Title from "./components/Title.vue";

//createApp(App).use(router).mount('#app')
const app=createApp(App)
app.mount('#app')
app.component('myTitle',Title)
