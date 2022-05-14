<template>
  <div class="chat">
    <h1>Мария, смотри, у меня шиза</h1>
    <v-list two-line>
        <text-message :type="1" :text="'я даша'" />
        <text-message :type="2" :text="'я тоже'"/>
        <text-message :type="4" :text="'на самом деле я не даша'"/>
        <text-message :type="3" :text="'ладно'"/>
    </v-list>
  </div>
</template>

<script>
import TextMessage from '../components/TextMessage.vue'

export default {
    name: "chat-view",
    components: {
        TextMessage
    }
  }
</script>
