<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TranslationRow } from './types';

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: { type: String, required: true },
    editableKey: { type: String, default: null },
    currentkey: { type: String, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    item: { type: Object<TranslationRow>, required: true },
  },
  data() {
    return {
      internalValue: this.value,
      copiedText: '',
      title: 'Edit',
    };
  },
  computed: {
    isDisabled(): boolean {
      return this.currentkey !== this.editableKey;
    },
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
    editableKey(newValue) {
      if (this.currentkey !== newValue) {
        this.internalValue = this.value;
        this.title = 'Edit';
      }
    },
  },
  methods: {
    onEdit() {
      if(this.isDisabled) {
        this.title = 'Save';
        this.$emit('edit', this.currentkey);
      } else if (!this.isDisabled) {
        this.title = 'Edit';
        this.$emit('done');
        this.$emit('change', this.internalValue);
      }
    },
    copyText(key) {
      this.copiedText = key;
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
        {{ title }}
      </button>
    </div>
  </td>
</template>
