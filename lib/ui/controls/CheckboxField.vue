<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CheckBoxInterface } from './types';

export default defineComponent({
  inheritAttrs: false,
  props: {
    items: { type: Array as PropType<CheckBoxInterface[]>, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },


  },
  data () {
    return {
      internalValue: 'false',
      selectedValues: [],
    };
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
  },
  methods: {
    onClick() {
      this.$emit('change', this.selectedValues);
    },
  },
});
</script>

<template>
  <div
    v-for="item in items"
    :key="item.checkBoxValue"
  >
    <input
      :id="item.checkBoxValue"
      v-model="selectedValues"
      type="checkbox"
      :value="item.checkBoxValue"
      :disabled="disabled"
    >
    <label :for="item.label">{{ item.label }}</label>
  </div>
</template>
