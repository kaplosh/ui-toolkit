<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: { type: undefined as PropType<any>, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    placeholder: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },

  },
  data () {
    const internalValue = sanitizeValue(this.value);
    return {
      internalValue,
      inputValue: numberToString(internalValue),

    };
  },
  watch: {
    value(newValue) {
      this.internalValue = sanitizeValue(newValue);
      this.inputValue = numberToString(this.internalValue);
    },
  },
  methods: {
    onBlur() {
      this.$emit('change', this.internalValue);
    },
    onInput(event) {
      const value = event.target.value;

      this.internalValue = sanitizeValue(value.replace(/[^0-9]/g, ''));
      this.inputValue = numberToString(this.internalValue);
      console.log(this.inputValue);
    },
    onSubmit(){
      this.$emit('change', this.internalValue);
      this.$emit('submit');
    },
  },
});

function sanitizeValue (value): null | number {
  if (!value) {
    return value === 0 ? 0 : null;
  }
  const integer = parseInt(value);
  return isNaN(integer) ? null : integer;

}
function numberToString (value:null|number):string {
  if(value === null){
    return '';
  } else {
    return String(value);
  }
}
</script>

<template>
  <input
    :id="domId"
    type="text"
    :value="inputValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @blur="onBlur"
    @input="onInput"
    @keydown.enter.stop="onSubmit"
  >
</template>
