<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout justify-center="">
          <v-flex xs12 sm6 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Laboratorium Sistem Tertanam dan Robotika</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" label="NIM" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock"  label="Kata Sandi" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Masuk</v-btn>
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
    drawer: false
  }),
  props: {
    source: String
  }
};
</script>