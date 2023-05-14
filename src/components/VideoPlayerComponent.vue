<template>
  <iframe style="width:100%;height:100%;position:absolute" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
  name: 'VideoPlayerComponent',
  props: ['id'],

  computed: {
    url() {
      return `https://youtube.com/embed/${this.id}`;
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>