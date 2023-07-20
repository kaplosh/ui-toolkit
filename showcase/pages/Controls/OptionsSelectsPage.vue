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

const selectedItemsDropdownSingle = ref(items.filter(item => Number(item.object.id) % 2 === 0));
const selectedItemsDropdownMultiple = ref(items.filter(item => Number(item.object.id) % 2 === 0));
const selectedItemsOptionsSelectSingle = ref(items.filter(item => Number(item.object.id) % 2 === 0));
const selectedItemsOptionsSelectMultiple = ref(items.filter(item => Number(item.object.id) % 2 === 0));
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
            :items="items"
            :selected="selectedItemsDropdownSingle"
            :single="true"
            @change="selectedItemsDropdownSingle = $event"
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
          multiple option select dropdown:
          <br>
          <ui.controls.OptionsSelectDropdown
            :items="items"
            :selected="selectedItemsDropdownMultiple"
            :single="false"
            @change="selectedItemsDropdownMultiple = $event"
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
          single option select:
          <br>
          <ui.controls.OptionsSelect
            :items="items"
            :selected="selectedItemsOptionsSelectSingle"
            :single="true"
            @change="selectedItemsOptionsSelectSingle = $event"
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
          multiple option select:
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
      </div>

      <div class="row">
        <ui.controls.OptionsSelectFallthrough/>
      </div>
    </PageExamplesSection>
  </div>
</template>
