<template>
    <div>
        <v-text-field
            label="Nim"
            outline
            v-model="profil.nim"
            readonly
          ></v-text-field>
        <v-text-field
            label="Nama"
            outline
            v-model="profil.nama"
            readonly
          ></v-text-field>
          <v-text-field
            label="Alamat"
            outline
            v-model="profil.alamat"
          ></v-text-field>
          <v-text-field
            label="Telepon"
            outline
            v-model="profil.telepon"
          ></v-text-field>
          <button @click="update()">Tekan</button>
    </div>
</template>
<script>
export default {
  props: ["countMhs", "allMhs", "profil"],
  data() {
    return {
      inputan: { alamat: null, telepon: null }
    };
  },
  created() {},
  methods: {
    update() {}
  }
};
</script>
