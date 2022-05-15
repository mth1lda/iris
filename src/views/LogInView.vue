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

        <v-btn block>
            Log In
        </v-btn>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: '',
        password: ''
    })
}
</script>

<style scoped>
    .login-design {
        padding: 30px;
    }
</style>