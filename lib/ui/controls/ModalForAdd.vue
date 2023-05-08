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
      if(!this.newKey){
        return;
      }
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
  <div
    class="card"
    style="width: 18rem;"
  >
    <div class="ms-1">
      Add new key
    </div>
    <div class="card-body">
      <input
        v-model="newKey"
        type="text"
        placeholder="New key"
        class="mb-1"
      >
      <input
        v-model="newTranslation"
        type="text"
        placeholder="New translation"
        class="mb-1"
      >
      <button
        class="btn btn-outline-success mb-1 text-end"
        @click="onSubmit"
      >
        Submit
      </button>
    </div>
  </div>
</template>
