import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/home/home.vue'
import jadwal from './components/home/jadwal.vue'
import alat from './components/home/alat.vue'
import login from './components/home/login.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        component: home,
        children: [{
            path: 'jadwal',
            component: jadwal
        }, {
            path: 'alat',
            component: alat
        }, {
            path: 'login',
            component: login
        }]
    }]
});