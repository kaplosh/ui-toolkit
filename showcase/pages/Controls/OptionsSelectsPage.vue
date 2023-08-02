<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
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

// TODO t131 do not repeat yourself!
const select1 = ref(items.filter(item => Number(item.object.id) % 2 === 0));
const select2 = ref(items.filter(item => Number(item.object.id) % 2 === 0));
const select3 = ref(items.filter(item => Number(item.object.id) % 2 === 0));
const select4 = ref(items.filter(item => Number(item.object.id) % 2 === 0));
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
      <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-3">
          single option select dropdown:
          <br>
          <ui.controls.OptionsSelectDropdown
            :single="true"
            :items="items"
            :selected="select1"
            @change="select1 = $event"
          />
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          multiple option select dropdown:
          <br>
          <ui.controls.OptionsSelectDropdown
            :single="false"
            :items="items"
            :selected="select2"
            @change="select2 = $event"
          />
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          single option select:
          <br>
          <ui.controls.OptionsSelect
            :items="items"
            :selected="select3"
            :single="true"
            @change="select3 = $event"
          />
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          multiple option select:
          <br>
          <ui.controls.OptionsSelect
            :items="items"
            :selected="select4"
            :single="false"
            @change="select4 = $event"
          />
        </div>
      </div>

      <div class="row">
        <h1 class="mt-lg-5">
          Special cases
        </h1>
        <h2>Connected fallthrough selects</h2>
        <ui.controls.OptionsSelectFallthrough />
      </div>
    </PageExamplesSection>
  </div>
</template>
