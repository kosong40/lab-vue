<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout justify-center>
          <v-flex xs12 sm6 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Laboratorium Sistem Tertanam dan Robotika</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="dataLog.username"
                    prepend-icon="person"
                    label="NIM"
                    type="text"
                    @keyup.enter="login()"
                  ></v-text-field>
                  <v-text-field
                    @keyup.enter="login()"
                    v-model="dataLog.password"
                    id="password"
                    prepend-icon="lock"
                    label="Kata Sandi"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login()" color="primary">Masuk</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    dataLog: { username: null, password: null },
    notif: null,
    read: false
  }),
  props: {
    source: String
  },
  created() {
    if (localStorage.length != 0) {
      this.dataLog.username = localStorage.nim;
      this.read = true;
    } else {
      this.read = false;
    }
  },
  methods: {
    login() {
      var dataLogs = this.dataLog;
      this.$http
        .post("http://localhost/api-lab/public/api/login", dataLogs)
        .then(function(response) {
          if (response.body.pesan == "Y") {
            localStorage.nim = response.body.data.id_pengguna;
            localStorage.nama = response.body.data.nama;
            this.$router.push("/mahasiswa");
          } else {
            alert("Nim atau Kata Sandi Salah");
          }
        });
    }
  }
};
</script>