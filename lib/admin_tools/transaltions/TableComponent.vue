<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';
import TableRow from './TableRow.vue';
import { TranslationRow } from './types';
import { items } from './mockDb';

const query= ref('');
const dictionary = ref(items);
const list = ref<TranslationRow[]>(dictionary.value);
const currentEdit = ref('nothing');
const props = defineProps({
  newObj: {
    type: Object as () => TranslationRow,
    required: true,
  },
});
watch(() => props.newObj, (value) => {
  if (value) {
    dictionary.value.push(value);
    list.value = dictionary.value;
  }
});
function onSearch (param: string) {
  if (list.value.length === 0) {
    list.value = dictionary.value.slice(0);
  }
  if (param.length - 1) {
    this.dictionary = list.value;
  }
  this.dictionary = dictionary.value.filter(item => item.key.toLowerCase().includes(param));
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
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Key</th>
        <th>Translation</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in dictionary"
        :key="item.key"
      >
        <table-row
          :currentkey="item.key"
          :value="item.translation"
          :item="item"
          :editable-key="currentEdit"
          @change="item.translation = $event"
          @edit="currentEdit = $event"
          @done="currentEdit = null"
        />
      </tr>
    </tbody>
  </table>
</template>
