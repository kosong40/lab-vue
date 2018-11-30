<template>
  <div>
    <div>
      <h1 align="center">Halaman Pengaturan</h1>
      <br>
      <h3 align="right">Profil</h3>
      <br>
      <v-text-field label="Nim" outline v-model="profil.nim" readonly></v-text-field>
      <v-text-field label="Nama" outline v-model="profil.nama" readonly></v-text-field>
      <v-text-field label="Alamat" outline v-model="inputan.alamat"></v-text-field>
      <v-text-field label="Telepon" outline v-model="inputan.telepon"></v-text-field>
      <v-btn color="primary" @click="update(profil.nim)">Simpan</v-btn>
    </div>
    <div style="margin-top:10px">
      <h3 align="right">Kata Sandi</h3>
      <v-text-field type="password" label="Kata Sandi Lama" outline></v-text-field>
      <v-text-field type="password" label="Kata Sandi Baru" outline></v-text-field>
      <v-btn color="primary">Ganti Kata Sandi</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: ["countMhs", "allMhs", "profil"],
  data() {
    return {
      inputan: { alamat: this.alamats, telepon: this.telepons }
    };
  },
  computed: {
    alamats() {
      return this.profil.alamat;
    },
    telepons() {
      return this.profil.telepon;
    }
  },
  created() {
    this.inputan.alamat = this.alamats;
    this.inputan.telepon = this.telepons;
  },
  methods: {
    update(nim) {
      var datas = this.inputan;
      this.$http
        .post(
          "http://localhost/api-lab/public/api/pengguna/update/" + nim,
          datas
        )
        .then(function(response) {
          // console.log(response.body);
          alert(response.body.pesan);
        });
    }
  }
};
</script>
