<script setup lang="ts">
import Datepicker from 'vue3-datepicker';
import { ref } from 'vue';

const datePicked = ref(new Date());

const emits = defineEmits([ 'onChange' ]);

function onChange () {
  emits('onChange', datePicked);
}

</script>

<template>
  <Datepicker
    v-model="datePicked"
    typeable
    @change="onChange"
  />
</template>

<style scoped>

</style>
