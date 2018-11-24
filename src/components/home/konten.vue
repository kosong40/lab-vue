<template>
  <div>
    <div>
        <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </div>
    <div style="margin-top:8px;">
        <v-layout row>
            <v-flex xs6 sm3>
                <v-container fluid>
                    <v-card>
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    >
                    </v-img>

                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Top western road trips</div>
                        <span class="grey--text">1,000 miles of wonder</span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn flat>Share</v-btn>
                    <v-btn flat color="purple">Explore</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                    <v-card-text v-show="show">
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
    <div>
        <h1 align="center">Berita Terbaru</h1>
    </div> 
    <div>
        <v-timeline>
            <v-timeline-item
            v-for="n in 4"
            :key="n"
            color="red lighten-2"
            large
            >
            <span slot="opposite">Tus eu perfecto</span>
            <v-card class="elevation-2">
                <v-card-title class="headline">Lorem ipsum</v-card-title>
                <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                </v-card-text>
            </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
    };
  }
};
</script>
