import vue from 'vue';
import app from './components/app';
import axios from 'axios';

window.axios = axios;

new vue({
    el: '#vue-app',
    components: { app }
});