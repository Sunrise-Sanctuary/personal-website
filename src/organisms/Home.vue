<template>
  <div id="home">
    <NavBar/>
    <LocationHero/>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue';
  import LocationHero from '../atoms/LocationHero';
  export default {
    name: 'Home',
    components: {
      NavBar,
      LocationHero,
    },
    data() {
      return {};
    },
  }
</script>

<style>

</style>