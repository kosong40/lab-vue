<template>
  <div>
    <v-layout>
      <v-flex xs12 md4 sm4>
        <v-container fluid>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" aspect-ratio="1.8"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Alat Laboratorium</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">
                <v-icon>details</v-icon>&nbsp;Detail
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex xs12 md4 sm4>
        <v-container fluid>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.8"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Ruang Laboratorium</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn href="#/mahasiswa/ruang" flat color="orange">
                <v-icon>details</v-icon>&nbsp;Detail
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex xs12 md4 sm4>
        <v-container fluid>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.8"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Meja Tugas Akhir</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">
                <v-icon>details</v-icon>&nbsp;Detail
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  props: ["countMhs", "allMhs", "profil"],
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
