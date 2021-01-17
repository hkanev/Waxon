require('./bootstrap');
import Loader from './Layout/Loader.vue'
import PageHader from './Layout/Header.vue'
import Login from './User/Login.vue'

import { createApp } from 'vue'

createApp({
    components: {
        Loader,
        PageHader,
        Login,
    }
}).mount('#app')
