<template>
  <div>
    Zakomenteovaný OptionsSelectDropdown
  </div>
</template>
<!--
<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';


interface Props {
  options: ui.OptionItem[];
  value: ui.OptionItem[];
  multiple?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits([ 'change' ]);


const {
  reference,
  floating,
  shown,
  floatingStyles,
} = ui.useFloatingList('bottom-start');

function isSelected(item: ui.OptionItem): boolean {
  return !!props.value.find(({ value }) => value === item.value );
}

function onClickOption(item: ui.OptionItem): void {
  let newArray;
  console.log('triggers');
  if (isSelected(item)) {
    newArray = props.value.filter(({ value }) => value !== item.value );
  } else {
    if (props.multiple){
      newArray = [ ...props.value, item ];
    } else {
      newArray = [ item ];
    }
  }
  emit('change', newArray);
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
            :items="props.value"
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
          v-for="item of options"
          :key="item.value"
          name="item"
          :item="item"
          :selected="isSelected(item)"
          :on-click="() => onClickOption(item)"
          class="list-group-item"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.list-group{
  max-height: 100px;
  overflow-y: scroll;
}
.list-group-item {
  cursor: pointer;
}
</style>
-->
<script setup>
import OptionsSelectDropdown from "@ema/ui-toolkit/ui/components/OptionsSelectDropdown.vue";
</script>
