<template>
    <div class="login-design">
        <v-text-field
        v-model="name"
        label="Имя"
        required
        ></v-text-field>

        <v-text-field
        v-model="password"
        label="Пароль"
        required
        type="password"
        ></v-text-field>

        <v-btn block @click="login">
            Log In
        </v-btn>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: '',
        password: ''
    }),
    methods: {
         login() {
             this.axios.post('http://localhost:8000/api/login', {
                 name: this.name,
                 password: this.password
             }).then(responce=>{
                 localStorage.token=responce.data
             })
        }
    }
}
</script>

<style scoped>
    .login-design {
        padding: 30px;
    }
</style>