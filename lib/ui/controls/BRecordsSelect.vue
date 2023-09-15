<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';

interface Props {
  options: ui.OptionItem[];
  modelValue: ui.OptionItem[];
  multiple?: boolean;
  menuMaxHeight?: number;
  small?: boolean;
}

const props = defineProps<Props>();

const selectValues = ref( props.modelValue );
const emits = defineEmits([ 'update:modelValue' ]);

function onChange (newValue) {
  emits('update:modelValue', newValue);
}


</script>

<template>
  <div>
    <ui.controls.OptionsSelectDropdown
      v-model="selectValues"
      :options="options"
      :on-change="onChange(selectValues)"
      b-link
      :multiple="multiple"
    />
  </div>
</template>

