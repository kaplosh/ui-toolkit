<script setup lang="ts">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';
import { recordsDays } from '../mocks.ts';
import { recordsMonths } from '../mocks.ts';


const months: ui.OptionItem[] = recordsMonths.map(record => ({
  value: record.id,
  object: record,
}));

const days: ui.OptionItem[] = recordsDays.map(record => ({
  value: record.id,
  object: record,
}));

const select1 = ref(days.filter(item => Number(item.object.id) % 2 === 0));
const select2 = ref(months.filter(item => Number(item.object.id) % 2 === 0));
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
    </div>
  </div>
</template>

  <style scoped />
