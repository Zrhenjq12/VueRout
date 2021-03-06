import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faExclamationCircle)
library.add(faCheck)
let app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store);
app.use(router);
app.mount('#app')