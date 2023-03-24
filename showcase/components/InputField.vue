<template>
  <input type="text" v-model="inputFieldData">
</template>

<script setup lang="ts">

export default {
  name: "InputField",
  data () {
    return {
      inputFieldData: "",

    };
  },
};
</script>

<style scoped>

</style>
