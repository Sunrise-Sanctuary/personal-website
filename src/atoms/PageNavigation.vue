<template>
  <div class="nav-wrapper">
    <b-navbar class="guestbook-nav navbar mx-auto" sticky>
      <b-navbar-nav class="navbar-center">
        <b-nav-item :exact-active-class="active" href="#space">Space</b-nav-item>
        <b-nav-item :exact-active-class="active" href="#location">Location</b-nav-item>
        <b-nav-item :exact-active-class="active" href="#recommendations">Recommendations</b-nav-item>
        <b-nav-item :exact-active-class="active" href="#rules">Rules</b-nav-item>
        <b-nav-item :exact-active-class="active" href="#contact-us">Contact Us</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'PageNavigation',
  components: {
  },
  data() {
    return {}
  }
};
</script>
<style lang="scss">
  .guestbook-nav {
    background-color: white;
  }
  .nav-wrapper {
    position: sticky;
    display: flex;
    width: 100%;
    top: 0;
    overflow: hidden;
    width: 107%;
    margin-top: -50px;
    margin-right: -50px;
    margin-left: -50px;
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
    .nav-item {
      padding: 0 15px;
    }
  }
</style>
