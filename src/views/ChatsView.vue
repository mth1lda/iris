<template>
  <div class="chats">
    <h1>а тут много чатиков</h1>
    <v-list two-line>
        <chat-preview :title="'другой чатик'" :chat_id="1"/>
        <chat-preview :chat_id="2"/>
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
        <chat-preview />
    </v-list>
  </div>
</template>

<script>
import ChatPreview from '../components/ChatPreview.vue'

export default {
    name: "chats-view",
    components: {
        ChatPreview
    }
  }
</script>
