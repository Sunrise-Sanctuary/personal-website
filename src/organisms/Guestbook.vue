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
    <h1>Welcome to the Sunrise Sanctuary</h1>
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
import Location from '../molecules/Location.vue';
import PageNavigation from '../atoms/PageNavigation.vue';
import Recommendations from '../molecules/Recommendations.vue';
import Rules from '../molecules/Rules.vue';
import Space from '../molecules/Space.vue';

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

.guestbook-descriptor {
  margin-top: 5px;
  padding-top: 0px;
  color: rgba(34, 34, 34, 0.75);
  letter-spacing: 0px;
  margin-top: 5px;
  margin-bottom: 0px;
  padding-top: 0px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #222;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  text-align: left;
  letter-spacing: 0px;
  text-decoration: none;
  text-transform: none;
}

.guestbook-header {
  margin-top: 15px;
  margin-bottom: 0px;
  padding-top: 0px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #222;
  font-size: 22px;
  line-height: 32px;
  font-weight: 500;
  text-align: left;
  letter-spacing: -0.5px;
  text-transform: none;
}
</style>