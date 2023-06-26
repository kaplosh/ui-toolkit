<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
import { ref } from 'vue';

const records = [
  { id: '1', name: 'Hyenk Nguyen' },
  { id: '2', name: 'Vilem Vilemovic' },
  { id: '3', name: 'Jarmil Krasomil' },
];

const items: ui.OptionItem[] = records.map(record => ({
  value: record.id,
  object: record,
}));


const selectedItems = ref<ui.OptionItem[]>([]);
//const selectedItems = ref(items.filter(item => Number(item.object.id) % 2 === 0));

function handleSelectedItems(updatedItems){
  selectedItems.value = updatedItems;
  return selectedItems;
  }
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Options Select:
    </h2>
    <PageExamplesSection
      title="Options Select"
    >
      <div class="col-md-6 col-lg-4 col-xl-3">
        static data:
        <br>
        <ui.controls.OptionsSelect
          :items="items"
          :selected="selectedItems"
          @change="handleSelectedItems"
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
        </ui.controls.OptionsSelect>
      </div>
    </PageExamplesSection>
  </div>
</template>
