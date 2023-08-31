<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
import ExampleItem from '../../components/ExampleItem.vue';
import { ref } from 'vue';


const records = [
  { id: '', name: '-' },
  { id: '1', name: 'Hyenk Nguyen' },
  { id: '2', name: 'Vilem Vilemovich' },
  { id: '3', name: 'Jarmil Krasomil' },
  { id: '4', name: 'Lopata Lopatovich' },
  { id: '6', name: 'Schmetle Petlich' },
  { id: '7', name: 'Jakakoliv Ex Tveho Výběru' },
];

const items: ui.OptionItem<any>[] = records.map(record => ({
  value: record.id,
  item: record,
}));

const select1Values = ref([ items[1] ]);
const select2Values = ref(
  items.filter(item => Number(item.item.id) % 2 === 0),
);
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
      <ExampleItem text="single option select">
        <ui.controls.OptionsSelect
          v-model="select1Values"
          :options="items"
          :multiple="false"
        >
          <template #item="{ item, selected, onClick }">
            <li
              :class="['list-group-item', selected && 'active' ]"
              @click="onClick"
            >
              {{ item.item.name }}
            </li>
          </template>
        </ui.controls.OptionsSelect>
      </ExampleItem>

      <ExampleItem text="multiple option select">
        <ui.controls.OptionsSelect
          v-model="select2Values"
          :options="items"
          :multiple="true"
        >
          <template #item="{ item, selected, onClick }">
            <li
              :class="['list-group-item', selected && 'active' ]"
              @click="onClick"
            >
              {{ item.item.name }}
            </li>
          </template>
        </ui.controls.OptionsSelect>
      </ExampleItem>
    </PageExamplesSection>
  </div>
</template>
