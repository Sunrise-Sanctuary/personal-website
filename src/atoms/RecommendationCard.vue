<template>
  <div>
    <b-card no-body class="overflow-hidden" :img-right="true">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="require(`../assets/${image}`)" :alt="`${name} image`" class="rounded-0"/>
        </b-col>
        <b-col md="6">
          <b-card-body :title="name">
            <b-card-text>
              {{description}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'RecommendationCard',
  components: {
  },
  props: ['name', 'image', 'imageLeft', 'imageRight', 'description']
};
</script>

<style>

</style>