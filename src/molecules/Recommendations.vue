<template>
  <div>
    <p class="guestbook-header">We hope you enjoy your stay at the Sunrise Sanctuary.</p>
    <p class="guestbook-descriptor">
      We thought we would share with you our absolute favorite places to eat, enjoy a cup of coffee, do a fun activity or explore!
    </p>
    <div class="location-guide-title-restaurants">
      <h2 class="guide-header">Best Restaurants and Bars</h2>
    </div>
  </div>
</template>

<script> 
export default {

}
</script>

<style>
.location-guide-title-restaurants {
    padding-top: 80px;
    padding-bottom: 80px;
    background-image: url('~@/assets/resto.jpeg');
    background-position: 50% 50%;
    background-size: cover;
}

.guide-header {
    margin-left: 0px;
    color: #fff;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -2px;
    text-shadow: 1px 1px 4px rgb(0 0 0 / 10%);
}
</style>