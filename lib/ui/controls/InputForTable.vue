<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ref } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: { type: String, required: true },
    currentkey: { type: String, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    placeholder: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: true },

  },
  data () {
    return {
      internalValue: this.value,
      inputValue: this.internalValue,
      isDisabled: this.disabled,
      showInputField: false,
      showInternalValue: true,
      currentEdit: this.currentkey,

    };
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
  },
  methods: {
    onSave() {
      if(this.inputValue !== this.internalValue) {
        this.$emit('change', this.internalValue);
      }
      this.isDisabled = true;
      this.currentEdit = '';
      this.$emit('done', this.currentEdit);

    },
    onEdit(){
      this.isDisabled = false;
      this.$emit ('edit', this.currentEdit );
    },
  },
});
</script>

<template>
  <div class="input-group mb-3">
    <input
      v-model="internalValue"
      :disabled="isDisabled"
      type="text"
      class="form-control"
      placeholder="Translation"
    >
    <button
      id="basic-addon1"
      class="input-group-text"
      @click="onEdit"
    >
      Edit
    </button>
    <button
      id="basic-addon1"
      class="input-group-text"
      @click="onSave"
    >
      Save
    </button>
  </div>
</template>
