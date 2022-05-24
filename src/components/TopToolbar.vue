<template>
  <div>

    <v-navigation-drawer
      app
      fixed
      v-model="TopToolbarClick"

    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Настройки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon>help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Помощь</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon>crop_portrait</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>выход</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      fixed
      dark
      color="#4672B0"
    >
      <v-app-bar-nav-icon @click="TopToolbarClick=!TopToolbarClick"></v-app-bar-nav-icon>

      <v-toolbar-title>Чаты</v-toolbar-title>
        <button value="add-chat" class="add-btn" @click="AddNewChat('/addChat')">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 6V26" stroke="#D3DEED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 16H6" stroke="#D3DEED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>
    </v-app-bar>

   
  </div>
</template>

<script>
  export default {
    name: 'top-toolbar',
    data: () => ({
        TopToolbarClick: false
    }),

    methods: {
        AddNewChat (url) {
            this.$router.push (url)
        }
    }
  }

</script>

<style scoped>
  .add-btn {
    margin-left: auto;
    color: #D3DEED;
    width: 32px;
    height: 32px;
  }
</style>