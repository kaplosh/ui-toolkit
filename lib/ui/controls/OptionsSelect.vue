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


const {
  reference,
  floating,
  shown,
  floatingStyles,
} = useFloatingList();

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
    <div
      ref="reference"
      style="border: 1px solid green"
      @click="shown = true"
    >
      <div class="d-flex">
        <div>
          <slot
            name="selected"
            :items="props.selected"
          />
        </div>
        <div />
      </div>
      <ul
        v-if="shown"
        ref="floating"
        class="list-group"
        :style="floatingStyles"
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
    </div>
  </div>
</template>

<style scoped>
.list-group-item {
  cursor: pointer;
}
</style>
