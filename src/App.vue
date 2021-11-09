<template>
  <b-container id="app" class="hero" fluid>
    <router-view :key="$route.fullPath"/>
  </b-container>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {};
  },
};
</script>

<style>
html, body {
    color: #434242;
    height: 100%;
    scroll-behavior: smooth;
}

#app {
  padding: 0;
}

</style>
