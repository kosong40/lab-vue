import Vue from 'vue'
import VueRouter from 'vue-router'
import navbar from './components/home/navbar.vue'
import jadwal from './components/home/jadwal.vue'
import alat from './components/home/alat.vue'
import login from './components/home/login.vue'
import konten from './components/home/konten.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        component: navbar,
        children: [{
            path: 'jadwal',
            component: jadwal
        }, {
            path: 'alat',
            component: alat
        }, {
            path: 'login',
            component: login
        }, {
            path: '/',
            component: konten
        }]
    }]
});