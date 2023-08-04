<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
import ExampleItem from '../../components/ExampleItem.vue';
import { ref } from 'vue';
const records = [
  { id: '', name: 'blank' },
  { id: '1', name: 'Hyenk Nguyen' },
  { id: '2', name: 'Vilem Vilemovich' },
  { id: '3', name: 'Jarmil Krasomil' },
  { id: '4', name: 'Lopata Lopatovich' },
  { id: '5', name: 'Jakakoliv Ex Tveho Výběru' },
  { id: '6', name: 'Schmetle Petlich' },
  { id: '7', name: 'Hyenk Nguyen' },
  { id: '8', name: 'Vilem Vilemovic' },
  { id: '9', name: 'Jarmil Krasomil' },
  { id: '10', name: 'Lopata Lopatovich' },
  { id: '11', name: 'Jakakoliv Ex Tveho Výběru' },
];

const items: ui.OptionItem[] = records.map(record => ({
  value: record.id,
  object: record,
}));

const selectDefault = items.filter(item => Number(item.object.id) % 2 === 0);

const select1 = ref(selectDefault);
const select2 = ref(selectDefault);
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      UI Components
    </h2>
    <PageExamplesSection
      title="Dropdown"
    >
      <ExampleItem
        text="dropdown list"
      >
        <ui.Dropdown
          :options="items"
          :value="select1"
          :multiple="true"
          @input="select1 = $event"
        >
          <a
            class="dropdown-item"
            href="#"
            @click.prevent="()=>{}"
          >Action</a>
          <hr class="dropdown-divider">
          <div class="dropdown-item">
            next item
          </div>
          <div class="dropdown-item">
            next item 2
          </div>
        </ui.Dropdown>
      </ExampleItem>
      <ExampleItem
        text="custom content"
      >
        <ui.Dropdown
          :options="items"
          :value="select2"
          :multiple="true"
          @input="select2 = $event"
        />
      </ExampleItem>
    </PageExamplesSection>
  </div>
</template>
