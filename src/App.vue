<template>
  <v-app>
    <top-toolbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TopToolbar from './components/TopToolbar.vue'

export default {
  name: 'App',
  components: {
    TopToolbar
  },
  data: () => ({
    //
  }),
};
</script>
