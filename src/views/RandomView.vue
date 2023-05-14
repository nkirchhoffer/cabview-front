<template>
  <section id="wrapper">
      <VideoPlayerComponent :id="video.id" :random="true" @change-video="getVideo" />
  </section>
</template>

<script>
import VideoPlayerComponent from '../components/VideoPlayerComponent.vue';

export default {
  name: 'RandomView',

  components: {
    VideoPlayerComponent
  },

  methods: {
    async getVideo() {
      const res = await fetch('https://api-dot-cabview.nw.r.appspot.com/random');
      const video = await res.json();

      this.video = video;
    }
  },

  data() {
    return {
      video: {}
    }
  },

  async beforeMount() {
    this.getVideo();
  }
}
</script>