<template>
  <section id="wrapper">
      <VideoPlayerComponent :id="id" />
  </section>
</template>

<script>
import VideoPlayerComponent from '../components/VideoPlayerComponent.vue';

export default {
  name: 'WatchView',
  props: ['id'],

  components: {
    VideoPlayerComponent
  },
}
</script>