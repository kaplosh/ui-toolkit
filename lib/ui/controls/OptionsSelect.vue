<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { computed } from 'vue';

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

const emits = defineEmits([ 'update:modelValue' ]);

const rootProps = computed(() => ({
  class: 'list-group overflow-y-scroll border-top border-bottom',
  style: { maxHeight: `${props.maxHeight}px` },
}));

function isSelected(option: ui.OptionItem): boolean {
  return !!props.modelValue.find(
    ({ value }) => value === option.value,
  );
}

function onToggleOption(option: ui.OptionItem): void {
  onSetOption(option, !isSelected(option));
}

function onSetOption(option: ui.OptionItem, selected: boolean): void {
  let newValue;

  if (selected) {
    if (!props.multiple){
      newValue = [ option ];
    } else {
      newValue = [ ...props.modelValue, option ];
    }
  } else {
    newValue = props.modelValue.filter(
      ({ value }) => value !== option.value,
    );

  }

  emits('update:modelValue', newValue);
}

</script>

<template>
  <ul
    v-if="$slots.option"
    v-bind="rootProps"
  >
    <slot name="input"></slot>
    <slot
      v-for="option of options"
      :key="option.value"
      name="option"
      :option="option"
      :selected="isSelected(option)"
      :on-change="(selected: boolean) => onSetOption(option, selected)"
      :on-toggle="() => onToggleOption(option)"
    />
  </ul>
  <ul
    v-else
    v-bind="rootProps"
  >
    <slot name="input" class="list-group-item"></slot>
    <li
      v-for="option of options"
      :key="option.value"
      :class="['list-group-item list-group-item-action', isSelected(option) && 'active' ]"
      style="cursor: pointer;"
      @click="onToggleOption(option)"
    >
      <slot
        v-if="$slots['option-content']"
        name="option-content"
        :option="option"
        :selected="isSelected(option)"
      />
      <span v-else>{{ option.item }}</span>
    </li>
  </ul>
</template>
