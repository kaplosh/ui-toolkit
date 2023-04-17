<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: { type: String, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    placeholder: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },

  },
  data () {
    return {
      internalValue: this.value,
      showInputField: false,
      showInternalValue: true,

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
      this.showInputField = false;
      this.showInternalValue = true;
    },
    onClick(){
      this.showInputField = true;
      this.showInternalValue = false;

    },
  },
});
</script>

<template>
  <input
    v-if="showInputField"
    :id="domId"
    v-model="internalValue"
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
    @blur="onBlur"
    @keydown.enter="onBlur"
  >
  <button v-if="showInputField" class="btn-outline-success" @click="onBlur">Update</button>
  <button v-if="showInputField" class="btn-outline-danger" @click="onBlur">Close</button>
  <div
    v-if="showInternalValue"
    class="clickable-text"
    @click="onClick"
  >
    {{ internalValue }}
  </div>
</template>
