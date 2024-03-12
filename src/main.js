import './assets/styles/style.scss';

import { createApp } from 'vue';
// import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';

import FontAwesomeIcon from './plugins/fontawesome-icons';

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

// app.use(createPinia())
app.use(router);

app.mount('#app');
