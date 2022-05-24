<template>
  <div class="chats">
    <h1>а тут много чатиков</h1>
    <v-list two-line v-for="chat in chats" :key="chat.id">
      <chat-preview :title="chat.title" :chat_id="chat.id" :description="chat.description" />
    </v-list>
  </div>
</template>

<script>
import ChatPreview from "../components/ChatPreview.vue";

export default {
  name: "chats-view",
  components: {
    ChatPreview,
  },
  data: () => ({
    chats: [],
  }),

  //метод на добавление чата из бд
  mounted() {
    this.axios
      .get("http://localhost:8000/api/chats", {
        headers: {
          authorization: "Bearer " + localStorage.token,
        },
      })
      .then((responce) => {
        this.chats = responce.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
