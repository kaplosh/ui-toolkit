<script lang="ts" setup>
import { ref, defineProps, watch, onMounted } from 'vue';
import TableRow from './TableRow.vue';
import { TranslationRow } from './types';

const items = ref<TranslationRow[]>([
  { key: 'db.record.person.name', translation: 'name', actions: '...' },
  { key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
  { key: 'db.record.person.language', translation: 'language', actions: '...' },
  { key: 'db.record.person.age', translation: 'age', actions: '...' },
  { key: 'db.record.city', translation: 'city', actions: '...' },
]);

const list = ref<TranslationRow[]>([]);
const currentEdit = ref('nothing');
const copiedText = ref('');
const query = ref('');

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
    this.$emit('refresh', this.items);
  }
});

onMounted(() => {if(items.value){
  this.$emit('refresh', this.items);

}
});
</script>

<template>
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
