<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';
const items = ref([
  { key: 'db.record.person.name', translation: 'name', actions: '...' },
  { key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
  { key: 'db.record.person.age', translation: 'age', actions: '...' },
]);
const value1 = ref('Text');

</script>



<template>
  <div class="container">
    <a href="#/">go home</a>
    <h1>Translation table</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>KeY</th>
          <th>Translation</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.key"
        >
          <td>{{ item.key }}</td>
          <td>
            <ui.controls.InputForTable
              :value="item.translation"
              @change="item.translation=$event"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



