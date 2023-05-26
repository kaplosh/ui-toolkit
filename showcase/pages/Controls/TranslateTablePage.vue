<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref, watch } from 'vue';
import CardForAdd from '../../../lib/admin_tools/transaltions/CardForAdd.vue';
import TableRow from '../../../lib/admin_tools/transaltions/TableRow.vue';
import TableComponent from '../../../lib/admin_tools/transaltions/TableComponent.vue';
import SearchingComponent from '../../../lib/admin_tools/transaltions/SearchingComponent.vue';
import { TranslationRow } from '../../../lib/admin_tools/transaltions/types';
const items = ref([
  { key: 'db.record.person.name', translation: 'name', actions: '...' },
  { key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
  { key: 'db.record.person.language', translation: 'language', actions: '...' },
  { key: 'db.record.person.age', translation: 'age', actions: '...' },
  { key: 'db.record.city', translation: 'city', actions: '...' },
]);
const list = ref([]);
const currentEdit = ref<string|null>('nothing');
const query = ref('');
const newObj = ref<TranslationRow>({});

watch(newObj, (value)=>{
  items.value.push(value);
  list.value = items.value;
});

function onSearch (param: string) {
  if (list.value.length === 0) {
    this.list = this.items.slice(0);
  }
  if (param.length - 1) {
    items.value = list.value;
  }
  this.items = items.value.filter(item => item.key.toLowerCase().includes(param));
}


function handleNewRow(data: TranslationRow) {
  newObj.value = data;
}
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h1>Translation table</h1>
    <div>
      <card-for-add />
    </div>
    <div>
      Searching:
      <input
        v-model="query"
        type="text"
        @keyup="onSearch(query)"
      >
    </div>
    <div />
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
    //TODO
    <card-for-add @new="handleNewRow" />
    <searching-component />
    <table-component :new-obj="newObj" />
  </div>
</template>



