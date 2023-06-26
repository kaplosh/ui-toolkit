<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import useFloatingList from '../composables/useFloatingList';
import { computed, Ref, ref } from 'vue';
import { OptionItem } from '../types';


interface Props {
  items?: ui.OptionItem[];
  selected: ui.OptionItem[];
  single?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits([ 'change' ]);
const selectedItems = ref<ui.OptionItem[]>([]);


const {
  reference,
  floating,
  shown,
  floatingStyles,
} = useFloatingList();

function isSelected(item: ui.OptionItem): boolean {
  return props.selected.includes(item);
}

function onClickOption(item: ui.OptionItem): void {
  console.log('KKK');
  if(!isSelected(item)) {
    console.log(item);
    selectedItems.value.push(item);
    console.log('these are selected', selectedItems);
  } else {
    selectedItems.value = this.props.selected.filter(item => item != item.id );
  }
 onSelectedChanged(selectedItems);
}

function onSelectedChanged(items: Ref<OptionItem[]>): void {
  emit('change', items);
  console.log('emitted');
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
        <div>
          ^^
        </div>
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
