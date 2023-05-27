<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';
import TableRow from './TableRow.vue';
import { TranslationRow } from './types';

const items = ref<TranslationRow[]>([
  { key: 'db.record.person.name', translation: 'name', actions: '...' },
  { key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
  { key: 'db.record.person.language', translation: 'language', actions: '...' },
  { key: 'db.record.person.age', translation: 'age', actions: '...' },
  { key: 'db.record.city', translation: 'city', actions: '...' },
]);
const query = ref('');
const list = ref<TranslationRow[]>(items.value);
const currentEdit = ref('nothing');
const props = defineProps({
  newObj: {
    type: Object as () => TranslationRow,
    required: true,
  },
});
watch(() => props.newObj, (value) => {
  if (value) {
    items.value.push(value);
    list.value = items.value;
  }
});
function onSearch (param: string) {
  if (list.value.length === 0) {
    list.value = items.value.slice(0);
  }
  if (param.length - 1) {
    items.value = list.value;
  }
  items.value = items.value.filter(item => item.key.toLowerCase().includes(param));
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
        v-for="item in items"
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
