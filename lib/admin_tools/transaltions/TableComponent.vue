<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref, watch } from 'vue';
import TableRow from './TableRow.vue';
const items = ref([
{ key: 'db.record.person.name', translation: 'name', actions: '...' },
{ key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
{ key: 'db.record.person.language', translation: 'language', actions: '...' },
{ key: 'db.record.person.age', translation: 'age', actions: '...' },
{ key: 'db.record.city', translation: 'city', actions: '...' },
]);
const list = ref([]);
const currentEdit = ref('nothing');
const copiedText = ref('');
const query = ref('');
const newObj = ref({});
const keysForDelete = ref([]);

watch(newObj, (value)=>{
items.value.push(value);
list.value = items.value;
});

function copyText (key) {
copiedText.value = key;
navigator.clipboard.writeText(copiedText.value);
}

function onSearch (param: string) {
if (list.value.length === 0) {
this.list = this.items.slice(0);
}
if (param.length - 1) {
this.items = this.list;
}
this.items = items.value.filter(item => item.key.toLowerCase().includes(param));
}
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
          @change="item.translation=$event"
          @edit="currentEdit=$event"
          @done="currentEdit=null"
        />
      </tr>
    </tbody>
  </table>
</template>
