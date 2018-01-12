import vue from 'vue';
import vuerouter from 'vue-router';
import app from './components/app';
import axios from 'axios';

vue.use(vuerouter);

window.axios = axios;

const router = new vuerouter({
    routes: [{
        path: '/',
        component: app 
    }]
});

new vue({
    el: '#vue-app',
    router
});