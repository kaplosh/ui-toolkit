<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ref } from 'vue';

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
      inputValue: this.internalValue,
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
    onSubmit() {
      if(this.inputValue !== this.internalValue) {
        this.$emit('change', this.internalValue);
      }
      this.showInputField = false;
      this.showInternalValue = true;
    },
    onClick(){
      this.showInputField = true;
      this.showInternalValue = false;
      this.$nextTick(() => {
        this.$refs.inputField.focus();
      });
    },
    onBlur(){
      this.inputValue = this.internalValue;
      this.showInputField = false;
      this.showInternalValue = true;
    },
  },
});
</script>

<template>
  <input
    v-if="showInputField"
    :id="domId"
    ref="inputField"
    v-model="internalValue"
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
    @keydown.enter="onSubmit"
    @blur="onBlur"
  >
  <button
    v-if="showInputField"
    class="btn-outline-success"
    @click="onSubmit"
  >
    Update
  </button>
  <div
    v-if="showInternalValue"
    class="clickable-text"
    @click="onClick"
  >
    {{ internalValue }}
  </div>
</template>
