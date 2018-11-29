import Vue from 'vue'
import VueRouter from 'vue-router'
//home
import navbar from './components/home/navbar.vue'
import jadwal from './components/home/jadwal.vue'
import alat from './components/home/alat.vue'
import login from './components/home/login.vue'
import konten from './components/home/konten.vue'
//mahasiswa
import navbarMhs from './components/home/mhs/navbarMhs'
import kontenMhs from './components/home/mhs/kontenMhs'
import settingMhs from './components/home/mhs/settingMhs'
import ruangMhs from './components/home/mhs/ruang'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/mahasiswa',
            component: navbarMhs,
            children: [{
                path: '/',
                component: kontenMhs
            }, {
                path: '/mahasiswa/pengaturan',
                component: settingMhs
            }, {
                path: '/mahasiswa/ruang',
                component: ruangMhs
            }]
        },
        {
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
        }
    ]
});