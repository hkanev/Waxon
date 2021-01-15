require('./bootstrap');
import Loader from './Layout/Loader.vue'

import { createApp } from 'vue'

createApp({
    components: {
        Loader,
    }
}).mount('#app')
