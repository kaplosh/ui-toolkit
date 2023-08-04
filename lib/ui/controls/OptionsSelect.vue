<script lang="ts" setup="">
// TODO t131 all the comments in this file
import { ui } from '@ema/ui-toolkit';


interface Props {
  options: ui.OptionItem[];
  value: ui.OptionItem[];
  multiple: boolean;
  maxHeight?: number;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    maxHeight: 150,
  },
);
const emit = defineEmits([ 'change' ]); // rename to `input`

function isSelected(item: ui.OptionItem): boolean {
  return props.value.includes(item);
}

function onClickOption(item: ui.OptionItem): void {
  let newArray;
  if (isSelected(item)) {
    newArray = props.value.filter(({ value }) => value !== item.value );
  } else {
    if (!props.multiple){
      newArray = [ item ];
    } else {
      newArray = [ ...props.value, item ];
    }
  }
  emit('change', newArray);
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
