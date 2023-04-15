<script lang="ts">
import { ui } from '@ema/ui-toolkit';
export default {
  name: 'TranslateTable',
  data () {
    return {
      items: [
        { key: 'db.record.person.name', translation: 'name', actions: '...' },
        { key: 'db.record.person.lastName', translation: 'lastName', actions: '...' },
        { key: 'db.record.person.age', translation: 'age', actions: '...' },
      ],
    };
  },
};
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
  </div>
</template>



