<script lang="ts">
import { PropType } from 'vue';

export default {
  props: {
    value: { type: Array as PropType<string>, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },

  },
  data () {
    return {
      internalValue: '',
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
  },
};
</script>

<template>
  <input
    id="radio option"
    v-model="internalValue"
    type="radio"
    value="one"
    :disabled="disabled"
  >
  <label for="jack">One</label>

  <input
    id="radio option"
    v-model="internalValue"
    type="radio"
    value="two"
    :disabled="disabled"
  >
  <label for="john">Two</label>

  <input
    id="radio option"
    v-model="internalValue"
    type="radio"
    value="three"
    :disabled="disabled"
  >
  <label for="mike">Three</label>
</template>
