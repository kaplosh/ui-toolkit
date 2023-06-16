<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    domId: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },
  },

  data () {
    return {
      checked: false,
    };
  },
  watch: {
    checked(updatedValues){
      this.$emit('change', updatedValues);
      },
    },
  },
);
</script>

<template class="container">
  <div class="d-inline-block">
    <input
      id="checkbox"
      v-model="checked"
      class="spt-form--checkbox-input"
      type="checkbox"
      :disabled="disabled"
    >
    <label
      v-if="checked"
      class="bi bi-check-square-fill"
      for="checkbox"
    >text</label>
    <label
      v-if="!checked"
      class="bi bi-square"
      for="checkbox"
    >text</label>
  </div>
</template>

<style scoped>
  .spt-form--checkbox-input {
    display: block;
    appearance: none;
    height: 0;
    width: 0;
    border: 0;
    margin: 0;
    padding: 0;
  }

  .spt-form--checkbox-label {
    cursor: pointer;
    display: flex;
    color: white;
    border: 1px solid gray;
    border-radius: 3px;
    height: 22px;
    width: 22px;
    margin: 2px 4px 2px 0;
    padding: 3px;
  }
</style>
