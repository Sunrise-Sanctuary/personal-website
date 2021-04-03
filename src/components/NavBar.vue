<template>
<div>
  <b-navbar  type="dark" variant="dark" fixed='top' toggleable="lg">
    <b-navbar-brand style="font-family: 'Comic Sans MS', cursive, sans-serif;" href="#">S.S.</b-navbar-brand>
    
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#rules">Rules</b-nav-item>
        <b-nav-item href="#suggestions">Suggestions</b-nav-item>
        <b-nav-item href="#share">Share</b-nav-item>
        <b-nav-item href="#share">Contact Info</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
    </b-collapse>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  },
  data() {
    return {
      mainProps: {  width: 40, height: 40, class: 'm1' }
    }
  },
  computed: {
  },

};
</script>
<style>
.banter-nav-bar {
  flex-grow: 0;
}
 
.desktop-nav {
    z-index: 2;
    background: white;
    position: relative;
}
</style>
