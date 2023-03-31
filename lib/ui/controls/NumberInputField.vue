<script lang="ts">
import { PropType } from 'vue';

export default {
  props: {
    value: { type: String as PropType<string>, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    placeholder: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },

  },
  data () {
    return {
      internalValue: this.value,

    };
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
  },
  methods: {
    onBlur() {
      this.$emit('change', this.internalValue);
    },
    onInput() {
      this.internalValue = Number(this.internalValue);
      if(isNaN(this.internalValue)) {
        this.internalValue = '';
      }
    },
  },
};
</script>

<template>
  <input
    :id="domId"
    v-model="internalValue"
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
    @blur="onBlur"
    @input="onInput"
  >
</template>
