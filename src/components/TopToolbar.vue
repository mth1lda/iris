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

    </v-app-bar>

  </div>
</template>

<script>
  export default {
    name: 'top-toolbar',
    data: () => ({
        TopToolbarClick: false
    })
  }

</script>