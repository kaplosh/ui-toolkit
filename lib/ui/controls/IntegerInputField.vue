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
      this.internalValue = Number(this.internalValue);
      console.log('emited', typeof this.internalValue);
      this.$emit('change', this.internalValue);
    },
    onInput() {
      if(isNaN(this.internalValue)) {
        this.internalValue = this.internalValue.slice(0,-1);
      }
      console.log('type of', typeof this.internalValue);
      //this.internalValue = Number(this.internalValue);
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
  <div>{{ internalValue }}</div>
</template>
