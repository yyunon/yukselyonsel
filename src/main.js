import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "@/assets/global.css"

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin)
library.add(faGithub)

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
