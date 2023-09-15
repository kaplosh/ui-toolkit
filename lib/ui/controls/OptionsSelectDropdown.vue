<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import BRecordLink from '../components/BRecordLink.vue';
import { ref } from 'vue';


interface Props {
  options: ui.OptionItem[];
  modelValue: ui.OptionItem[];
  multiple: boolean;
  bLink?: boolean;
  menuMaxHeight?: number;
  rowMaxHeight?: number;
  small?: boolean;
}

const props =
withDefaults(
  defineProps<Props>(),
  {
    menuMaxHeight: 300,
    rowMaxHeight: 60,
  },
);


const emits = defineEmits([ 'update:modelValue' ]);
const query = ref('');
const matchingItems = ref(props.options);
const updatedModelValue = ref(props.modelValue);

function onChange (newValue: ui.OptionItem[]) {
  emits('update:modelValue', newValue);
}
function search(list, query) {
  const queryLowered = query.toLowerCase();

  matchingItems.value = list.filter(element =>
    element.item.toLowerCase().includes(queryLowered),
  );

  return matchingItems;
}

function onRemove (list: ui.OptionItem[], optionId) {
  console.log(list, optionId);
  updatedModelValue.value.filter(item => item.value === optionId);
    onChange(list);



}

</script>

<template>
  <ui.Dropdown
    caret
    :small="small"
    :prepend-class="[
      'border border-end-0 align-items-center overflow-auto px-2',
    ]"
    custom-menu
  >
    <template #prepend>
      <slot
        v-if="$slots.prepend"
        name="prepend"
      />
      <span
        v-else-if="!multiple"
        class="text-truncate"
      >
        <span
          v-if="bLink"
          class=""
        >
          <BRecordLink
            :record="modelValue[0]"
            show-id
          /></span>
        <span v-else>
          {{ modelValue[0]?.item }}
        </span>

      </span>
      <span
        v-else-if="modelValue.length"
        class="text-truncate"
      >
        <span
          v-if="bLink"
        >
          <span
            v-for="option in modelValue"
            class="d-flex d-inline"
          >
            <BRecordLink
              :record="option"
              show-id
            /><p
              class="delete-caption"
              @click="onRemove(updatedModelValue, option.value)"
            >delete</p></span>

        </span>
        <span v-else>[{{ modelValue.length }}]
          {{ modelValue.map(option => option.item).join(', ') }}</span>
      </span>
    </template>
    <ui.controls.OptionsSelect
      :model-value="modelValue"
      :options="matchingItems || options"
      :multiple="multiple"
      :max-height="menuMaxHeight"
      @update:modelValue="onChange"
    >
      <template
        v-if="bLink"
        #input
      >
        <input
          v-model="query"
          placeholder="Search for options"
          class="list-group-item border-3"
          @input="search(options,query)"
        >
      </template>
      <template
        v-if="$slots.option"
        #option="slotProps"
      >
        <span v-if="bLink">
          <input>
        </span>
        <slot
          name="option"
          v-bind="slotProps"
        />
      </template>
      <template
        v-if="$slots['option-content']"
        #option-content="slotProps"
      >
        <slot
          name="option-content"
          v-bind="slotProps"
        />
      </template>
    </ui.controls.OptionsSelect>
  </ui.Dropdown>
</template>

<style scoped>
.delete-caption {
  font-size: 10px;
  font-family: monospace;
}

</style>
