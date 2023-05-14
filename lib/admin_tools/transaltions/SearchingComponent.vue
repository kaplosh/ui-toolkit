<script lang="ts" setup="">
import { ref, watch } from 'vue';
const list = ref([]);
const query = ref('');

function onSearch (param: string) {
  if (list.value.length === 0) {
    this.list = this.items.slice(0);
  }
  if (param.length - 1) {
    items.value = list.value;
  }
  this.items = items.value.filter(item => item.key.toLowerCase().includes(param));
}
</script>

<template>
  <div>
    Searching:
    <input
      v-model="query"
      type="text"
      @keyup="onSearch(query)"
    >
  </div>
</template>
