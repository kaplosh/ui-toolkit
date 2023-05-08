<script lang="ts">
import { defineComponent, PropType } from 'vue';


export default defineComponent({
  inheritAttrs: false,
  props: {
    value: { type: String, required: true },
    editableKey: { type: String, default: null },
    currentkey: { type: String, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: true },
    item: { type: Object as any },

  },
  data () {
    return {
      internalValue: this.value,
      inputValue: this.internalValue,
      showInternalValue: true,
      copiedText: '',

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
    copyText (key) {
  this.copiedText= key;
  navigator.clipboard.writeText(this.copiedText);
},
  },
});
</script>

<template>
  <td class="font-monospace text-truncate">
    <button
      class="btn btn-outline-dark bi bi-clipboard"
      @click="copyText(item.key)"
    />
    {{ item.key }}
  </td>
  <td>
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
  </td>
</template>
