<template>

<div id="app"
:style="{ backgroundImage: 'url(' + 'placecage/com/1000/1000' + ')'}" 
     class="hero">
    <NavBar/>
    <WebsiteHeader/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import WebsiteHeader from './components/WebsiteHeader.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    WebsiteHeader,
  },
    data() {
      return {};
    },

  metaInfo() {
    return {
      title: 'Welcome to the Sunrise Sanctuary!'
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    
}
.navbar .nav > li a {
    display: block;
    height: 80px;
    text-align: center;
    padding-top: 30px;
    font-weight: 600;
    color: #FFFFFF;
}
.bg-light {
    background-color: black !important;
}
html, body {
    color: #434242;
    font-family: 'Comic Sans MS', cursive, sans-serif !important;
    /* font-family: 'Open Sans', sans-serif !important; */
    height: 100%;
}
.content {
  padding-top:40px;
  padding-bottom:40px;
}

h4, h3 {
  font-weight: 300;
  color: #22A39F;
}

h4 {
    font-size: 54px;
    text-align: center;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, strong, b {
    /* font-family: 'Noto Sans JP', sans-serif !important; */
    font-family: 'Noto Sans JP', cursive, sans-serif !important;
    margin-bottom: 20px;
}


html, body {
    color: #434242;
    font-family: 'Comic Sans MS', cursive, sans-serif !important;
}
</style>
