import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
const store = createPinia();
App.use(store);

createApp(App).mount('#app');
