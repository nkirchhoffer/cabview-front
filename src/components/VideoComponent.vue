<template>
  <div class="column is-one-third">
    <router-link :to="{ path: '/watch', query: { v: id } }">
      <div class="card">
        <div class="card-image" :style="style">
          <div class="card-content-overlay">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-stations">
              <span class="tag is-primary" v-if="video.departure_station">🚂 {{ video.departure_station.toUpperCase() }}</span>
              <span class="tag is-warning ml-1" v-if="video.arrival_station">🏁 {{ video.arrival_station.toUpperCase() }}</span>
              <span class="tag is-info is-pulled-right">🕒 1h40</span>
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'VideoComponent',
  props: ['video'],

  data() {
    return {
      id: ''
    }
  },

  computed: {
    style() {
      return `background-image: url('https://img.youtube.com/vi/${this.id}/maxresdefault.jpg');`;
    }
  },

  beforeMount() {
    const id = new URL(this.video.url).searchParams.get('v');
    this.id = id;
  }
}
</script>

<style>
  .card {
    position: relative;
  }

  .card-image {
    position: relative;
    padding-top: 56.25%;
    background-size: cover;
    background-position: center;
  }

  .card-content-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    color: white;
  }

  .video-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .video-stations {
    font-size: 14px;
    margin-bottom: 3px;
  }

  .label-depart {
      background-color: #209cee;
      color: white;
      padding: 2px 5px;
      border-radius: 4px;
      margin-right: 5px;
  }

  .label-arrival {
      background-color: #23d160;
      color: white;
      padding: 2px 5px;
      border-radius: 4px;
      margin-right: 5px;
  }
  </style>