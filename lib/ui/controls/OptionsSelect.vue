<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import useFloatingList from '../composables/useFloatingList';
import { OptionItem } from '../types';


interface Props {
  items: ui.OptionItem[];
  selected: ui.OptionItem[];
  single?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits([ 'change' ]);

function isSelected(item: ui.OptionItem): boolean {
  return !!props.selected.find(({ value }) => value === item.value );
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

function onSelectedChanged(items: OptionItem[]): void {
  emit('change', items);
}
</script>

<template>
  <div class="d-inline-block">
    <ul
      class="list-group"
    >
      <slot
        v-for="item of items"
        :key="item.value"
        name="item"
        :item="item"
        :selected="isSelected(item)"
        :on-click="() => onClickOption(item)"
        class="list-group-item"
      />
    </ul>
  </div>
</template>

<style scoped>
.list-group {
  max-height: 100px;
  overflow-y: auto;
}
.list-group-item {
  cursor: pointer;
}
</style>
