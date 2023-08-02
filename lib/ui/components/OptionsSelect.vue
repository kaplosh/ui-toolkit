<script lang="ts" setup="">
// TODO t131 all the comments in this file
import { ui } from '@ema/ui-toolkit';
import { OptionItem } from '../types'; // do not use direct import, use `ui.OptionItem`

interface Props {
  items: ui.OptionItem[]; // rename to `options`
  selected: ui.OptionItem[]; // rename to `value`
  single?: boolean; // rename (and revert logic) to `miltuple`
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
  return props.selected.includes(item);
}

function onClickOption(item: ui.OptionItem): void {
  let newArray;
  if(isSelected(item)) {
    newArray = props.selected.filter(({ value }) => value !== item.value );
  } else {
    if(props.single){
      newArray = [ item ];
    } else {
      newArray = [ ...props.selected, item ];
    }
  }
  onSelectedChanged(newArray);
}

// inline this call (remove this function)
function onSelectedChanged(items: OptionItem[]): void {
  emit('change', items);
}
</script>

<template>
  <ul
    class="list-group overflow-y-scroll"
    :style="{ maxHeight: `${props.maxHeight}px` }"
  >
    <slot
      v-for="item of items"
      :key="item.value"
      name="item"
      :item="item"
      :selected="isSelected(item)"
      :on-click="() => onClickOption(item)"
    />
  </ul>
</template>
