<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { computed, ref } from 'vue';
const items = ref([
  { key: 'db.record.person.name', translation: 'name', actions: '...' },
  { key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
  { key: 'db.record.person.language', translation: 'language', actions: '...' },
  { key: 'db.record.person.age', translation: 'age', actions: '...' },
  { key: 'db.record.city', translation: 'city', actions: '...' },
]);
const currentEdit = ref('nothing');
const copiedText = ref('');
const query = ref('');
let list = ref([]);


function copyText (key) {
  copiedText.value = key;
  navigator.clipboard.writeText(copiedText.value);
}

function onSearch (param:string) {
  if(list.value.length === 0 ) {
    this.list = this.items.slice(0);
  }

  this.items = items.value.filter(item => item.key.toLowerCase().includes(param));
  if(param.length-1){
    this.items = this.list;
    this.items = items.value.filter(item => item.key.toLowerCase().includes(param));
  }

  }
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h1>Translation table</h1>
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
          <td class="font-monospace text-truncate">
            <button
              class="bi bi-clipboard"
              @click="copyText(item.key)"
            />
            {{ item.key }}
          </td>
          <td>
            <ui.controls.InputForTable
              :currentkey="item.key"
              :value="item.translation"
              :editable-key="currentEdit"
              @change="item.translation=$event"
              @edit="currentEdit=$event"
              @done="currentEdit=$event"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



