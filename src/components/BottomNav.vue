
<template>
  <v-bottom-navigation app fixed grow v-model="activeItem" class="bottom-nav">
    <v-btn value="calendar" class="n-a-bottom" @click="GoToPage('/calendars')">
      <span>Календарь</span>
      <v-icon>calendar_view_month</v-icon>
    </v-btn>

    <v-btn value="chats" class="n-a-bottom" @click="GoToPage('/chats')">
      <span>Чаты</span>
      <v-icon>wechat</v-icon>
    </v-btn>

    <v-btn
      value="characters"
      class="n-a-bottom"
      @click="GoToPage('/characters')"
    >
      <span>Персонажи</span>
      <v-icon>list_alt</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "bottom-nav",
  data: () => ({
    BottomNav: true,
    activeItem: "chats",
  }),
  methods: {
    GoToPage(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style scoped>
.bottom-nav {
  background-color: #4672b0 !important;
}
.n-a-bottom {
  color: #d3deed !important;
}


.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: #B0C4DE !important;
}

.v-btn--active {
  color: #d3deed !important;
}

</style>