<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';

interface Props {
  options: ui.OptionItem[];
  modelValue: ui.OptionItem[];
  multiple: boolean;
  maxHeight?: number;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    maxHeight: 150,
  },
);
const emit = defineEmits([ 'update:modelValue' ]);

function isSelected(item: ui.OptionItem): boolean {
  return !!props.modelValue.find(
    ({ value }) => value === item.value,
  );
}

function onClickOption(item: ui.OptionItem): void {
  let newValue;

  if (isSelected(item)) {
    newValue = props.modelValue.filter(
      ({ value }) => value !== item.value,
    );
  } else {
    if (!props.multiple){
      newValue = [ item ];
    } else {
      newValue = [ ...props.modelValue, item ];
    }
  }

  emit('update:modelValue', newValue);
}

</script>

<template>
  <ul
    class="list-group overflow-y-scroll"
    :style="{ maxHeight: `${props.maxHeight}px` }"
  >
    <slot
      v-for="item of options"
      :key="item.value"
      name="item"
      :item="item"
      :selected="isSelected(item)"
      :on-click="() => onClickOption(item)"
    />
  </ul>
</template>
