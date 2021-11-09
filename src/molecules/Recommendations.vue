<template>
  <div class="section-start">
    <p class="guestbook-header">Neighborhood Eats</p>
    <p class="guestbook-descriptor">Welcome to Delray Beach, the most up-and-coming vacation and lifestyle hotspot in the
      country. Whether you're into good food, beautiful beaches, outdoor sports, or nightlife, you're bound to have an
      incredible visit. Here are a few of our favorite spots to eat:
    </p>
    <b-card-group class="recommendation-cards">
      <recommendation-card
        name="Hawkers"
        image="hawkers.jpg"
        imageLeft="true"
        description="If you are looking for a place with a hip and fun ambiance and mouth-watering delicious food, try our favorite spot in town. This Asian fusion tapas style restaurant will not disappoint. Three dishes you MUST order: Roti, beef skewers and those pillow-y soft fried chicken baos. Yum!"/>
      <recommendation-card 
        name="Pio Pio"
        image="piopio.png" 
        imageRight="true"
        description="Looking for some delicious Peruvian food coupled with a laid-back atmosphere and some fun Spanish music? Try this place and don’t forget to order the plantains! The lomo saltada and the roasted chicken are our favorite dishes here. This place is also perfect if you feel like staying home and ordering in."/>
      <recommendation-card
        name="Amar"
        image="amar.jpg" 
        imageLeft="true"
        description="If you are looking for authentic middle eastern food, this is THE spot. At this Lebanese restaurant, everything is freshly made in house, including the bread and hot sauce! It’s chic ambiance and incredible service makes this a great spot to go out on a date or with good friends. And don’t forget to order a delicious Lebanese wine to pair up with your meal."/>
      <recommendation-card
        name="Dune Deck"
        image="dunedeckcafe.png" 
        imageRight="true"
        description="Breakfast by the beach with an ocean view anyone? Try our absolute favorite brunch spot! It has a great selection of Greek inspired food - Opa! It’s a bit of a drive but you can’t not visit this place and trust us, you will want to go back. Make it a beach day!"/>
      <recommendation-card
        name="Lionfish"
        image="lionfish.jpg" 
        imageLeft="true"
        description="If you are looking for a great happy hour spot, this is it. They have great cocktails, delicious hand rolls and don’t forget to order the Surf and Turf sushi roll and Batatas Bravas!"/>
      <recommendation-card
        name="Sushi Simon"
        image="sushisimon.jpg" 
        imageRight="true"
        description="Are you a sushi lover like we are? We understand that when it comes to sushi, fresh fish is the most important thing. This is the spot and it’s right around the corner!"/>
      <recommendation-card
        name="Tramonti"
        image="tramonti.jpg" 
        imageLeft="true"
        description="If you are craving Italian, don’t forget to make a reservation ahead of time at this popular and delicious place. Its elegant atmosphere makes pairs up perfectly with its delicious food. You absolutely must try the Bolognese and the Eggplant Rollatini. Mamma Mia!"/>
      <recommendation-card
        name="The Poke Company"
        image="pokecompany.png" 
        imageRight="true"
        description="Looking for the best poke in town! Try this one. Lots of toppings to choose from and delicious home-made sauces. Trust us on this one!"/>
      <recommendation-card
        name="Two Georges"
        image="twogeorges.jpg" 
        imageRight="true"
        description="Try this delicious laid-back vacation vibes spot. This traditional restaurant is known for the freshest seafood in town."/>
      <recommendation-card
        name="Caffe Luna Rosa"
        image="caffelunarosa.jpg" 
        imageLeft="true"
        description="Looking for a nearby brunch spot? This fine Italian ocean side restaurant is the place to go. They roast their own coffee beans and make their own bread in-house. Oh! And the coffee is served with the cutest sugar sticks!"/>
    </b-card-group>
  </div>
</template>

<script> 
import RecommendationCard from '../atoms/RecommendationCard.vue';

export default {
  name: 'Recommendations',
  components: {
    RecommendationCard
  }
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