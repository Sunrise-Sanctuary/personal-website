<template>
  <div class="background-image location-hero" style="background-image:url('https://global-uploads.webflow.com/5ab30f883c0d5f3ebc626470/5d8cdd47e4a31c73c4d4bd61_Outsite%20Venice%20Beach%20Glyndon%20hero%20desktop.jpg')">
<div class="hero-text-container">

    <b-row>
    <b-col cols="8">
      
 <b-row>
   <h3 style="text-align: left" class="description" >
     Delray Beach, Florida
     </h3>
    </b-row>
 <b-row>
   <h3 style="text-align: left" class="big">
     The Sunrise Sanctuary
     </h3>
 </b-row>
     <b-row>
       <h3 style="text-align: left" class="description">
     Beaches • Nightlife •  Relaxation • Beautiful Weather 
     </h3>
    </b-row>
      </b-col>
    <b-col cols="4"></b-col>
  </b-row>
</div>
  
</div>


</template>
<script>

export default {
  name: "LocationHero",
};
</script>

<style>

.background-image{

  min-height: 600px;
  position: relative;

}

.location-hero {
  background-position: 0% 50%, 0px 0px;
    background-size: 110%, auto;
    background-attachment: scroll, scroll;
}

.hero-text-container {
  justify-content: center;
  text-align: left !important;
    align-items: center;
    /* background: #000; */
    color: #fff;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    position: absolute;
    margin-left: 10%;
    bottom: 50%;
    top: 50%;
    left: 0;
    right: 0;
    padding: 15px;
    display: flex;

}


.description{
  /* padding-top: 10px,10px,0px,0px; */
  padding: 10px;
    display: inline;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
    font-family: 'IBM Plex Sans', sans-serif;
    color: rgb(216, 216, 216);
    font-size: 28px !important;
    line-height: 30px;
    font-weight: 500 !important;
    text-align: center;
    /* letter-spacing: -px; */
    text-decoration: none;
    text-transform: none;
    text-shadow: 0 2px 40px rgb(80 80 82 / 20%), 2px 0 40px rgb(80 80 82 / 20%);
}

.big{
    display: inline;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
    font-size: 48px;
    line-height: 46px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -3px;
    text-decoration: none;
    text-transform: none;
    text-shadow: 0 2px 40px rgb(80 80 82 / 20%), 2px 0 40px rgb(80 80 82 / 20%);
}


</style>