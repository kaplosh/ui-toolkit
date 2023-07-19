<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';


const records = [
  { id: '', name: '' },
  { id: '1', name: 'Hyenk Nguyen' },
  { id: '2', name: 'Vilem Vilemovic' },
  { id: '3', name: 'Jarmil Krasomil' },
];

const items: ui.OptionItem[] = records.map(record => ({
  value: record.id,
  object: record,
}));

const selectedItemsOptionsSelectMultiple = ref(items.filter(item => Number(item.object.id) % 2 === 0));
const selectedItemsInDropdown = ref(items.filter(item => Number(item.object.id) % 2 === 0));
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        multiple option select step 1:
        <br>
        <ui.controls.OptionsSelect
          :items="items"
          :selected="selectedItemsOptionsSelectMultiple"
          :single="false"
          @change="selectedItemsOptionsSelectMultiple = $event"
        >
          <template #item="{ item, selected, onClick }">
            <li
              :class="['list-group-item', selected && 'active' ]"
              @click="onClick"
            >
              {{ item.object.name }}
            </li>
          </template>
        </ui.controls.OptionsSelect>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        multiple option select dropdown step 2:
        <br>
        <ui.controls.OptionsSelectDropdown
          :items="selectedItemsOptionsSelectMultiple"
          :selected="selectedItemsInDropdown"
          :single="false"
          @change="selectedItemsInDropdown = $event"
        >
          <template #selected="{ items }">
            <span v-if="!items.length">-</span>
            <span v-if="items.length === 1">{{ items[0].object.name }}</span>
            <span v-if="items.length > 1">[ {{ items.length }} ]</span>
          </template>
          <template #item="{ item, selected, onClick }">
            <li
              :class="['list-group-item', selected && 'active' ]"
              @click="onClick"
            >
              {{ item.object.name }}
            </li>
          </template>
        </ui.controls.OptionsSelectDropdown>
      </div>
    </div>
  </div>
</template>
