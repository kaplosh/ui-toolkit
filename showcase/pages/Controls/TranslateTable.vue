<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';
const items = ref([
  { key: 'db.record.person.name', translation: 'name', actions: '...' },
  { key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
  { key: 'db.record.person.age', translation: 'age', actions: '...' },
]);
const currentEdit = ref('nothing');
const copiedText = ref('');
const disabledEdit = ref(false);

function copyText (key) {
  copiedText.value = key;
  navigator.clipboard.writeText(copiedText.value);
}

</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h1>Translation table</h1>
    <h2>{{ currentEdit }}</h2>
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
              :editable-key="currentEdit === item.key ? item.key : null"
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



