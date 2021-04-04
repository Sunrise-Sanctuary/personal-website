<template>
  <b-container class="bv-example-row">
    <b-row class="image-row">
      <b-col>
        <b-img :height="290" src="https://picsum.photos/600/400/?image=41" class="offset-image"/>
      </b-col>
      <b-col>
        <b-img :height="290" src="https://picsum.photos/600/400/?image=41" class="offset-image"/>
      </b-col>
    </b-row>

    <b-row class="image-row">
      <b-col>
        <b-img :height="290" src="https://picsum.photos/600/400/?image=41" class="offset-image"/>
      </b-col>
      <b-col>
        <b-img :height="290" src="https://picsum.photos/600/400/?image=41" class="offset-image"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>
  .image-row {
    margin: 15px 0;
  }   
</style>