<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile href="#/mahasiswa/">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="#/mahasiswa/pengaturan">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="keluar()">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Keluar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{nama}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid >
        <router-view 
        v-bind:countMhs="countMhs" 
        v-bind:allMhs="mhs" 
        v-bind:profil="profil"/>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    nama: localStorage.nama,
    countMhs: null,
    mhs: [],
    profil: [{ nama: null, nim: null, alamat: null, telepon: null }]
  }),
  props: {
    source: String
  },
  created() {
    this.detailMhs();
    this.getMhs();
    if (localStorage.nim == null && localStorage.nama == null) {
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  methods: {
    keluar() {
      var r = confirm("Yakin mau keluar ??");
      if (r == true) {
        localStorage.clear();
        this.$router.push("/login");
      }
    },
    getMhs() {
      this.$http
        .get("http://localhost/api-lab/public/api/pengguna")
        .then(function(response) {
          this.countMhs = response.body.length;
          this.mhs = response.body;
        });
    },
    detailMhs() {
      this.$http
        .get("http://localhost/api-lab/public/api/pengguna/" + localStorage.nim)
        .then(function(response) {
          this.profil.nama = response.body.nama;
          this.profil.nim = response.body.nim;
          this.profil.alamat = response.body.alamat;
          this.profil.telepon = response.body.telepon;
        });
    }
  }
};
</script>