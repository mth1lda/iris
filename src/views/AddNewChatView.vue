<template>
  <div class="add-new-chat-style">
    <v-text-field v-model="chatAvatar" label="картинка" required></v-text-field>

    <v-text-field v-model="chatName" label="название" required></v-text-field>

    <v-text-field
      v-model="chatDescription"
      label="описание"
      required
    ></v-text-field>

    <v-btn block @click="AddChat"> создать чат </v-btn>
  </div>
</template>

<script>
export default {
    data: () => ({
        chatAvatar: '',
        chatName: '',
        chatDescription: '',
    }),
    methods: {
        AddChat() {
            this.axios.post('http://localhost:8000/api/chats', {
                avatar: this.chatAvatar,
                title: this.chatName,
            },{headers:{
                authorization: 'Bearer '+localStorage.token
            }
            }).then(responce=>{
                 console.log(responce)
             })
            }
        }
    }
</script>

<style scoped>
.add-new-chat-style {
  padding: 8%;
}
</style>