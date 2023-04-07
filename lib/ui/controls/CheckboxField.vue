<script lang="ts">
import { PropType } from 'vue';

export default {
  props: {
    values: { type: Array as PropType<string>, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },

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
</template>
