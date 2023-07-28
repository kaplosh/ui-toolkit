<script setup lang="ts">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';
import { recordsDays } from '../mocks.ts';
import { recordsMonths } from '../mocks.ts';
import { recordsYears } from '../mocks.ts';


const months: ui.OptionItem[] = recordsMonths.map(record => ({
  value: record.id,
  object: record,
}));

const days: ui.OptionItem[] = recordsDays.map(record => ({
  value: record.id,
  object: record,
}));

const years: ui.OptionItem[] = recordsYears.map(record => ({
  value: record.id,
  object: record,
}));

const select1 = ref(days.filter(item => Number(item.object.id) === 1));
const select2 = ref(months.filter(item => Number(item.object.id) === 1));
const select3 = ref(years.filter(item => Number(item.object.id) === 1));
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        <h2>Day select</h2>
        <ui.controls.OptionsSelectDropdown
          :items="days"
          :selected="select1"
          :single="true"
          @change="select1 = $event"
        >
          <template #selected="{ items }">
            <span
              v-if="!items.length"
              class="btn btn-secondary"
            >-</span>
            <span
              v-if="items.length === 1"
              class="btn btn-secondary"
            >{{ items[0].object.name }}</span>
            <span
              v-if="items.length > 1"
              class="btn btn-secondary"
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
      <div class="col-md-6 col-lg-4 col-xl-3">
        <h2>Month select</h2>
        <ui.controls.OptionsSelectDropdown
          :items="months"
          :selected="select2"
          :single="true"
          @change="select2 = $event"
        >
          <template #selected="{ items }">
            <span
              v-if="!items.length"
              class="btn btn-secondary"
            >-</span>
            <span
              v-if="items.length === 1"
              class="btn btn-secondary"
            >{{ items[0].object.name }}</span>
            <span
              v-if="items.length > 1"
              class="btn btn-secondary"
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
      <div class="col-md-6 col-lg-4 col-xl-3">
        <h2>Month select</h2>
        <ui.controls.OptionsSelectDropdown
          :items="years"
          :selected="select3"
          :single="true"
          @change="select3 = $event"
        >
          <template #selected="{ items }">
            <span
              v-if="!items.length"
              class="btn btn-secondary"
            >-</span>
            <span
              v-if="items.length === 1"
              class="btn btn-secondary"
            >{{ items[0].object.name }}</span>
            <span
              v-if="items.length > 1"
              class="btn btn-secondary"
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
  </div>
</template>

  <style scoped />
