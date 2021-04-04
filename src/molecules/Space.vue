<template>
  <div class="space-section">
    <h1 class="guestbook-header">Our pink dream house, right by the ocean and nightlife.</h1>
    <div class="features">
      <p class="space-feature">Private 1-Bedroom Apartment</p>
      <p class="black-point faded">•</p>
      <p class="space-feature">Public Pool And Resort Area</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .features {
    display: flex;
    padding-top: 15px;
    padding-right: 0px;
    padding-bottom: 25px;
  }
 .space-feature {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 5px;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #222;
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
    letter-spacing: -0.25px;
 }
 .black-point {
    display: inline-block;
    margin-bottom: 0px;
    padding-right: 5px;
    padding-left: 5px;
    color: #222;
    line-height: 16px;
    margin: auto 0;
  }

  .space-section {
    margin-top: 25px;
  }
</style>