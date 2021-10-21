import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import BaseCard from './components/base/BaseCard.vue';
import BaseButton from './components/base/BaseButton.vue';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);

app.mount('#app');
