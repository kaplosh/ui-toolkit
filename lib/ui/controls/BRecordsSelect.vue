<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';


interface Props {
  options: ui.OptionItem[];
  modelValue: ui.OptionItem[];
  multiple: boolean;
  menuMaxHeight?: number;
  small?: boolean;
}

const emits = defineEmits([ 'update:modelValue' ]);


defineProps<Props>();
</script>

<template>
  <div>
    <ui.controls.OptionsSelectDropdown
      :options="options"
      :multiple="false"
      :model-value="modelValue"
      @update:modelValue="onChange"
    >
      <input type="text">
    </ui.controls.OptionsSelectDropdown>
  </div>
</template>

