import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import './assets/main.css';

const BaseCard = defineAsyncComponent(() => import('./components/base/BaseCard.vue'));
const BaseButton = defineAsyncComponent(() => import('./components/base/BaseButton.vue'));

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);

app.mount('#app');
