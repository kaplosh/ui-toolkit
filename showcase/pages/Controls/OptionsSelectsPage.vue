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

const selectDefault = items.filter(item => Number(item.object.id) % 2 === 0);

const select1 = ref(selectDefault);
const select2 = ref(selectDefault);
const select3 = ref(selectDefault);
const select4 = ref(selectDefault);
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
          <div class="d-inline-block">
            <ui.controls.OptionsSelectDropdown
              :options="items"
              :value="select1"
              :multiple="true"
              @change="select1 = $event"
            >
              <template #selected="{ items }">
                <span
                  v-if="!items.length"
                  class="btn btn-primary"
                >-</span>
                <span
                  v-if="items.length === 1"
                  class="btn btn-primary"
                >{{ items[0].object.name }}</span>
                <span
                  v-if="items.length > 1"
                  class="btn btn-primary"
                >[ {{ items.length }} ]</span>
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
        <div class="col-md-6 col-lg-4 col-xl-3">
          multiple option select dropdown:
          <br>
          <div class="d-inline-block">
            <ui.controls.OptionsSelectDropdown
              :options="items"
              :value="select2"
              :multiple="true"
              @change="select2 = $event"
            >
              <template #selected="{ items }">
                <span
                  v-if="!items.length"
                  class="btn btn-primary"
                >-</span>
                <span
                  v-if="items.length === 1"
                  class="btn btn-primary"
                >{{ items[0].object.name }}</span>
                <span
                  v-if="items.length > 1"
                  class="btn btn-primary"
                >[ {{ items.length }} ]</span>
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
        <div class="col-md-6 col-lg-4 col-xl-3">
          single option select:
          <br>
          <ui.controls.OptionsSelect
            :options="items"
            :value="select3"
            :multiple="false"
            @input="select3 = $event"
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
            :options="items"
            :value="select4"
            :multiple="true"
            @input="select4 = $event"
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
        <h1 class="mt-lg-5">
          Special cases
        </h1>
        <h2>Connected fallthrough selects</h2>
        <ui.controls.OptionsSelectFallthrough />
      </div>
    </PageExamplesSection>
  </div>
</template>
