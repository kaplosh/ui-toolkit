<script lang="ts" setup="">
import { ref, watch } from 'vue';
import { TranslationRow } from './types';

const items = ref<TranslationRow[]>([]);
const list = ref<TranslationRow[]>([]);
const query = ref('');

function onSearch (param: string) {
  if (list.value.length === 0) {
    this.list = this.items.slice(0);
  }
  if (param.length - 1) {
    this.items.value = list.value;
  }
  this.items.value = items.value.filter(item => item.key.toLowerCase().includes(param));
  this.$emit('refresh', this.items);
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
