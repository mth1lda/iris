<template>
    <v-list-item @click="GoToChat()"
        ripple
    >
        <v-list-item-avatar>
        <img :src="avatar">
        </v-list-item-avatar>
        <v-list-item-content>
        <v-list-item-title v-html="title"></v-list-item-title>
        <v-list-item-subtitle
            v-html="subtitle"
        ></v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
  export default {
    name: "chat-preview",
    data: () => ({
     
    }),
    props: {
        avatar: {type: String, default: require('../assets/avatar.png')},
        title: {type: String, default: 'первый чатик'},
        subtitle: {type: String, default: 'приветик'},
        chat_id: {type: Number, default: 1}
    },
    methods: {
        GoToChat () {
            this.$router.push ('chat/'+this.chat_id)
        }
    }
  }
</script>
