<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: { type: Array as PropType<string>, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },
    counter: { type: Boolean as PropType<boolean>, default: false },

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
});
</script>

<template>
  <div>
    <input
      id="option one"
      v-model="internalValue"
      type="checkbox"
      :value="internalValue"
      :disabled="disabled"
    >
  </div>
</template>
