<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';
import OptionsSelectDropdown from '../components/OptionsSelectDropdown.vue';
import BRecordLink from '../components/BRecordLink.vue';
import {Record} from "../types";

interface Props {
  options: ui.OptionItem<ui.Record>[];
  modelValue: ui.OptionItem<ui.Record>[];
  multiple?: boolean;
  menuMaxHeight?: number;
  small?: boolean;
}

const props = defineProps<Props>();

const emits = defineEmits([ 'update:modelValue', 'search' ]);

const updatedModelValue = ref(props.modelValue);
const matchingItems = ref(props.options);
const query = ref('');


function onChange (newValue) {
  updatedModelValue.value = newValue;
  emits('update:modelValue', newValue);
}

function onRemove (list: ui.OptionItem[], optionId) {
  updatedModelValue.value = list.filter(item => item.value !== optionId);
  onChange(updatedModelValue.value);
}

function onSearch (event) {
  emits('search', event.target.value);
}
</script>

<template>
  <div>
    <ui.controls.OptionsSelectDropdown
      v-model="updatedModelValue"
      :options="matchingItems || options"
      :multiple="multiple"
      @update:modelValue="onChange"
    >
      <template #content>
        <div v-if="!multiple">
          <div
            v-for="option in updatedModelValue"
            :key="option.value"
            class="d-flex d-inline"
          >
            <BRecordLink
              :record="option"
              show-id
            /><p
              @click="onRemove(updatedModelValue, option.value)"
            >
              <i class="bi bi-x-lg delete-caption" />
            </p>
          </div>
        </div>
        <div v-else>
          <div
            v-for="option in updatedModelValue"
            :key="option.value"
            class="d-flex d-inline"
          >
            <BRecordLink
              :record="option"
              show-id
            />
            <p
              @click="onRemove(updatedModelValue, option.value)"
            >
              <i class="bi bi-x-lg delete-caption" />
            </p>
          </div>
        </div>
      </template>
      <template #input>
        <input
          v-model="query"
          placeholder="Search for options"
          class="list-group-item border-3"
          @input="onSearch"
        >
      </template>
    </ui.controls.OptionsSelectDropdown>
  </div>
</template>

<style scoped>
.delete-caption {
  font-size: 15px;
  font-family: monospace;
  margin-left: 5px;
  cursor: pointer;
}
</style>
