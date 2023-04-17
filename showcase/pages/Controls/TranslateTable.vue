<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';
const items = ref([
  { key: 'db.record.person.name', translation: 'name', actions: '...' },
  { key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
  { key: 'db.record.person.age', translation: 'age', action: '...' },
]);
const value1 = ref('');

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.key"
        >
          <td>{{ item.key }}</td>
          <td>{{ item.translation }}</td>
          <td>{{ item.key }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <ui.controls.InputField
        :value="value1"
        @change="value1=$event"
      />
      {{ value1 }}
    </div>
  </div>
</template>



