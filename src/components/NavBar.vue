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
          <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" disabled class="bitcoinPrice">
          <!-- <b-img v-bind="this.mainProps" :src="require('../assets/btcLogo.svg')" rounded="circle" alt="Circle image"></b-img> -->
          Price: ${{this.btcPrice}} </b-nav-item>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>
</div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'NavBar',
  components: {
  },
  data() {
    return {
      btcPrice: null,
      mainProps: {  width: 40, height: 40, class: 'm1' }
    }
  },
  computed: {
  },


  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => (this.btcPrice = Math.trunc(response.data.bpi["USD"]["rate_float"])))
  .catch(this.btcPrice = "0")    
    window.setInterval(() => {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => (this.btcPrice = Math.trunc(response.data.bpi["USD"]["rate_float"])))
  .catch(this.btcPrice = "0")    
  }, 2500)


  }
};
</script>
<style>
.banter-nav-bar {
  flex-grow: 0;
}
    
.bitcoinPrice{
  background: #2c3e50;
    border-radius: 45px;
  font-weight: 400;
}
.desktop-nav {
    z-index: 2;
    background: white;
    position: relative;
}
</style>
