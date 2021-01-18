require('./bootstrap');
import Loader from './Layout/Loader.vue'
import PageHader from '@/Layout/Header/Header.vue'
import Login from '@/User/Login.vue'

import { createApp } from 'vue'

const app =createApp({
    components: {
        Loader,
        PageHader,
        Login,
    }
}).mount('#app')

