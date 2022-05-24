<template>
  <!-- <div :class="{'role-from-message': type==1, 'role-to-message': type==2, 'out-of-role-from-message': type==3, 'out-of-role-to-message': type==4}"> -->
  <div :class="'message-' + type">
    <div :class="type">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "text-message",
  props: {
    type: { type: String, default: "" },
    text: { type: String, default: "" },
  },
};
</script>

<style scoped>
.role-message-from-user {
  padding: 14px;
  margin: 16px;

  background: #b0c4de;
  border-radius: 20px;
}

.role-message-to-user {
  padding: 14px;
  margin: 16px;

  background: #d3deed;
  border-radius: 20px;
}

.out-of-role-message-from-user {
  padding: 14px;
  margin: 16px;
  width: 68%;

  color: white;
  background: #678dc2;
  border-radius: 20px;
}

.out-of-role-message-to-user {
  padding: 14px;
  margin: 16px;
  width: 68%;

  color: white;
  background: #678dc2;
  border-radius: 20px;
}

.message-out-of-role-message-from-user {
    display: flex;
    justify-content: end;
}
</style>