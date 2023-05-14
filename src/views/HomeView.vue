<template>
  <section class="home">
    <div class="container is-fluid">
      <section class="hero">
        <div class="hero-body">
          <p class="title">CabView</p>
          <p class="subtitle">Bibliothèque de vidéos ferroviaires en cabine</p>
          <p>L'information des gares de départ et d'arrivée est expérimentale, elle n'est pas encore au point.</p>
          <p class="is-pulled-right"><router-link :to="{ name: 'random' }" class="button is-primary">Vidéo aléatoire</router-link></p>
        </div>
      </section>

      <div class="columns is-multiline">
        <VideoComponent v-for="video in videos" :key="video.id" :video="video" />
        <InfiniteLoading @infinite="load" slots.complete="" />
      </div>
    </div>
  </section>
</template>

<script>
import VideoComponent from '../components/VideoComponent.vue'
//import axios from 'axios';

import InfiniteLoading from 'v3-infinite-loading';
import 'v3-infinite-loading/lib/style.css';

export default {
  name: 'HomeView',
  components: {
    VideoComponent,
    InfiniteLoading
  },

  data() {
    return {
      videos: [],
      page: 0
    }
  },

  methods: {
    async load($state) {
      console.log('loading');
      try {
        const req = await fetch(`https://api-dot-cabview.nw.r.appspot.com/videos?page=${this.page}`);
        const videos = await req.json();

        console.log(videos);

        this.videos.push(...videos);

        if (videos.length < 18) {
          $state.complete();
        } else {
          $state.loaded();
          this.page++;
        }
      } catch(e) {
        $state.error();
      }
    }
  }
}
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>