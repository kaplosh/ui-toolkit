<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';


interface Props {
  options: ui.OptionItem[];
  modelValue: ui.OptionItem[];
  multiple: boolean;
  menuMaxHeight?: number;
  small?: boolean;
}

withDefaults(
  defineProps<Props>(),
  {
    menuMaxHeight: 300,
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
      'border border-end-0 align-items-center overflow-hidden px-2',
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
        {{ modelValue[0]?.item }}

      </span>
      <span
        v-else-if="modelValue.length"
        class="text-truncate"
      >
        [{{ modelValue.length }}]
        {{ modelValue.map(option => option.item).join(', ') }}
      </span>
    </template>
    <ui.controls.OptionsSelect
      :model-value="modelValue"
      :options="options"
      :multiple="multiple"
      :max-height="menuMaxHeight"
      @update:modelValue="onChange"
    >
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
