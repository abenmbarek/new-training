<template>
  <v-app
    id="vuetify_webpack_sample"
    color="transaprent"
    class="VuetifyApp"
    flat>
    <main>
      <div class="text-center">
        <h1>{{ sampleData }}</h1>
        <h1>{{ testComputed }}</h1>
      </div>
      <my-card title="Our planet title from parent"></my-card>
    </main>
  </v-app>
</template>

<script>
import myCard from './myCard.vue';

export default ({
  components: { myCard },
  data : () => ({
    sampleData : 'sample text',
  }),
  computed : {
    testComputed () {
      return this.sampleData && this.sampleData.toUpperCase()|| '';
    }
  }
});
</script>