<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ref } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: { type: String, required: true },
    editableKey: { type: String, default: null },
    currentkey: { type: String, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    placeholder: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: true },

  },
  data () {
    return {
      internalValue: this.value,
      inputValue: this.internalValue,
      showInternalValue: true,

      isDisabled: this.disabled,
      currentEdit: this.currentkey,
      currentEditable: this.editableKey,
      //isDisabled, currentEdit, currentEditable smrsknout do jedne variable

    };
  },

  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
    editableKey(newValue){
      this.currentEditable = newValue;
      if(this.currentEdit!==this.currentEditable){
        this.isDisabled = true;
        if(this.internalValue!==this.value){
          this.internalValue = this.value;
        }
      } else {
        this.isDisabled = false;
      }
    },
  },
  methods: {
    onSave() {
      this.isDisabled = true;
      this.currentEdit = 'nothing';
      this.$emit('done');
      this.$emit('change', this.internalValue);
      this.currentEdit = this.currentkey;
    },
    onEdit(){
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
