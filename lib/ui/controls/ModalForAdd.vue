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
      newKey: '',
      newTranslation: '',
    };
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
  },
  methods: {
    onSubmit(){
      const newObj = {
        key: this.newKey,
        translation: this.newTranslation,
      };
      this.$emit('new', newObj);
      this.newKey = '';
      this.newTranslation = '';
    },

  },
});
</script>

<template>
  <input
    v-model="newKey"
    type="text"
    placeholder="new key"
  >
  <input
    v-model="newTranslation"
    type="text"
    placeholder="new translation"
  >
  <button @click="onSubmit">
    Submit
  </button>
</template>
