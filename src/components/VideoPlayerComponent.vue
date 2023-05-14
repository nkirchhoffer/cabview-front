<template>
  <section class="player">
    <iframe style="width:100%;height:100%;position:absolute" :src="url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="router-actions">
      <router-link :to="{ name: 'home' }">
        ⬅️
      </router-link>
      <a v-on:click="reload" v-if="random">
        🔄
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VideoPlayerComponent',
  props: ['id', 'random'],

  methods: {
    reload() {
      this.$emit('changeVideo');
    }
  },

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
iframe {
  z-index: 1;
}

.router-actions {
  position: absolute;
  top: 5%;
  left: 3%;
  font-size: 32pt;
  z-index: 2;
}
</style>