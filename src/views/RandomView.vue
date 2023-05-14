<template>
  <section id="wrapper">
      <VideoPlayerComponent :id="video.id" />
  </section>
</template>

<script>
import VideoPlayerComponent from '../components/VideoPlayerComponent.vue';

export default {
  name: 'RandomView',

  components: {
    VideoPlayerComponent
  },

  data() {
    return {
      video: {}
    }
  },

  async beforeMount() {
    const res = await fetch('https://api-dot-cabview.nw.r.appspot.com/random');
    const video = await res.json();

    this.video = video;
  }
}
</script>