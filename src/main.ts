import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse , faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHouse , faUser)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
