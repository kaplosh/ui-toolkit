<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
import { ref } from 'vue';
import OptionsSelectDropdown from "../../../lib/ui/controls/OptionsSelectDropdown.vue";

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

const selectedItemsSingle = ref(items.filter(item => Number(item.object.id) % 2 === 0));
const selectedItemsMultiple = ref(items.filter(item => Number(item.object.id) % 2 === 0));
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Options Select:
    </h2>
    <PageExamplesSection
      title="Options Select Dropdown"
    >
      <div class="col-md-6 col-lg-4 col-xl-3">
        static data single select:
        <br>
        <ui.controls.OptionsSelectDropdown
          :items="items"
          :selected="selectedItemsSingle"
          :single="true"
          @change="selectedItemsSingle = $event"
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
      <div class="col-md-6 col-lg-4 col-xl-3">
        static data multiple select:
        <br>
        <ui.controls.OptionsSelectDropdown
          :items="items"
          :selected="selectedItemsMultiple"
          :single="false"
          @change="selectedItemsMultiple = $event"
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
    </PageExamplesSection>
  </div>
</template>
