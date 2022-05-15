<template>
    <div :class="{'role-from-message': type==1, 'role-to-message': type==2, 'out-of-role-from-message': type==3, 'out-of-role-to-message': type==4}">
    {{text}}
    </div>
</template>

<script>
export default {
    name: 'text-message',
    props: {
        type: {type: Number, default: 1}, text: {type: String, default: ''}

    }
}
</script>

<style scoped>
    .role-from-message {
        padding: 20px;
        margin: 20px;

        background: #D3DEED;
        border-radius: 20px;
    }
    .role-to-message {
        padding: 20px;
        margin: 20px;

        background: #B0C4DE;
        border-radius: 20px;
    }
    .out-of-role-from-message {
        padding: 20px;
        margin: 20px;
        float: left;
        width: 70%;

        color: white;
        background: #678DC2;
        border-radius: 20px;
    }
    .out-of-role-to-message {
        padding: 20px;
        margin: 20px;
        float: right;
        width: 70%;

        color: white;
        background: #678DC2;
        border-radius: 20px;
    }
</style>