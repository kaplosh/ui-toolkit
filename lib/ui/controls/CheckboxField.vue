<script lang="ts">
import { PropType } from 'vue';

export default {
  props: {
    values: { type: Array as PropType<string>, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },
    counter: { type: Boolean as PropType<boolean>, default: false },

  },
  data () {
    return {
      internalValues: [],
    };
  },
  watch: {
    value(newValue) {
      this.internalValues = newValue;
    },
  },
  methods: {
    onBlur() {
      this.$emit('change', this.internalValues);
    },
  },
};
</script>

<template>
  <div>
    <input
      id="option one"
      v-model="internalValues"
      type="checkbox"
      value="one"
      :disabled="disabled"
    >
    <label for="jack">One</label>

    <input
      id="option two"
      v-model="internalValues"
      type="checkbox"
      value="two"
      :disabled="disabled"
    >
    <label for="john">Two</label>

    <input
      id="option three"
      v-model="internalValues"
      type="checkbox"
      value="three"
      :disabled="disabled"
    >
    <label for="mike">Three</label>

    <input
      id="option four"
      v-model="internalValues"
      type="checkbox"
      value="four"
      :disabled="disabled"
    >
    <label for="mike">Four</label>

    <input
      id="option five"
      v-model="internalValues"
      type="checkbox"
      value="five"
      :disabled="disabled"
    >
    <label for="mike">Five</label>
  </div>
  <div>{{ internalValues }}</div>
</template>
