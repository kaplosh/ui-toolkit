<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';


interface Props {
  options: ui.OptionItem[];
  modelValue: ui.OptionItem[];
  multiple: boolean;
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

function onChange (newValue: ui.OptionItem[]) {
  emits('update:modelValue', newValue);
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
      <span class="text-truncate">
        <span v-if="$slots.content">
          <slot name="content" />
        </span>
        <span v-else>
          <template v-if="!multiple">
            {{ modelValue[0]?.item }}
          </template>
          <template v-else-if="modelValue.length">
            [{{ modelValue.length }}]
            {{ modelValue.map(option => option.item).join(', ') }}
          </template>
        </span>
      </span>
    </template>
    <ui.controls.OptionsSelect
      :model-value="modelValue"
      :options="options"
      :multiple="multiple"
      :max-height="menuMaxHeight"
      @update:modelValue="onChange"
    >
      <template #input>
        <slot name="input" />
      </template>
      <template
        v-if="$slots.option"
        #option="slotProps"
      >
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
