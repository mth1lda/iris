<template>
  <v-app>
    <top-toolbar />
    <v-main>
      <router-view/>
    </v-main>
    <bottom-nav />
  </v-app>
</template>

<script>
import TopToolbar from './components/TopToolbar.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'App',
  components: {
    TopToolbar,
    BottomNav
  },
  data: () => ({
    //
  }),
};
</script>
