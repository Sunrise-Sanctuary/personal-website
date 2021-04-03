<template>
<div class="header-container">
  <!-- <b-navbar-brand style="font-family: 'Comic Sans MS', cursive, sans-serif;" href="#">Welcome...</b-navbar-brand> -->
  <h1 class="display-4 test">Welcome the Sunrise Sanctuary</h1>
  <p class="lead">We hope you enjoy your stay!</p>
  <hr class="my-4">
  <p class="lead">
    <b-button variant="secondary" href="#profile">Explore</b-button>
  </p>
</div>
</template>

<script>

export default {
  name: 'WebsiteHeader',
  components: {
  },
  computed: {
  },
};
</script>
<style>

.test {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.header-container {
    padding-top: 110px;
    /* padding-bottom: 500px; */
    margin:20px;
}
.header-text {
    text-align: left;
}
.banter-nav-bar {
  flex-grow: 0;
}

.desktop-nav {
    z-index: 2;
    background: white;
    position: relative;
}
</style>
