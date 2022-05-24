<template>
  <div class="chat">
    <h1>Мария, смотри, у меня шиза{{ $route.params.chat_id }}</h1>
    <div class="content">
      <v-list class="input__box" two-line>
        <text-message
          v-for="message in messages"
          :key="message.type"
          :type="message.type"
          :text="message.text"
        />
        <p />
      </v-list>
      <input
        v-model="msg"
        class="msg"
        placeholder="напиши сюда сообщение, пожалуйста"
      />
      <button @click="Send">Отправить</button>
    </div>
  </div>
</template>

<script>
import TextMessage from "../components/TextMessage.vue";

export default {
  name: "chat-view",
  components: {
    TextMessage,
  },

  data() {
    return {
      msg: "",
      messages: [
        {
          type: "role-message-from-user",
          text: "Я даша", //сообщение от пользователя
        },
        {
          type: "role-message-to-user",
          text: "я тоже",
        },
        {
          type: "out-of-role-message-to-user",
          text: "на самом деле я не даша",
        },
        {
          type: "out-of-role-message-from-user",
          text: "ладно",
        },
      ],
    };
  },
  methods: {
    Send() {
      if (this.msg) {
        this.messages.push({ type: "role-message-from-user", text: this.msg });
      }
      else {
        alert("Ваше сообщение пустое");
      }
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input__box {
  max-width: 1900px;
  width: 100%;
}

.msg {
  width: 70%;
  padding: 18px;
  background-color: aquamarine;
  border-radius: 20px;
}
</style>