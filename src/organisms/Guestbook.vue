// Lets rip this off ASAP
// https://www.outsite.co/locations/los-angeles-venice-glyndon#experience-div

// 1. Hero component - picture of the house "Sunrise Sanctuary" with descriptive text underneat
// 2. Nav Bar right below
// 3. "Space"
// 4. "Location"
// 5. "Recommendations"
// 6. "Rules"
// 7. "Contact Us"

<template>
  <div class="guestbook">
    <h1>We truly hope you enjoy your stay</h1>
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="guestbook-content">
      <page-navigation/>
      <space id="space"/>
      <location id="location"/>
      <recommendations id="recommendations"/>
      <rules id="rules"/>
    </div>
  </div>
</template>

<script>
import Location from '../atoms/Location.vue';
import PageNavigation from '../atoms/PageNavigation.vue';
import Recommendations from '../atoms/Recommendations.vue';
import Rules from '../atoms/Rules.vue';
import Space from '../atoms/Space.vue';

export default {
  components: { PageNavigation, Space, Location, Recommendations, Rules },
}
</script>

<style>
.guestbook {
  margin-top: 65px;
}

.guestbook-content {
  position: relative
}
</style>