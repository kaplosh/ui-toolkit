<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    checked: { type: Boolean, required: true },
    domId: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean as PropType<boolean>, default: false },
  },
});
</script>

<template class="container">
  <div class="d-inline-block">
    <input
      :id="domId"
      :checked="checked"
      class="input"
      type="checkbox"
      :disabled="disabled"
      @change="$emit('change', $event.target.checked)"
    >
    <label
      :for="domId"
      :class="[ 'bi', checked ? 'bi-check-square-fill' : 'bi-square' ]"
    />
  </div>
</template>

<style scoped>
  .input {
    display: block;
    appearance: none;
    height: 0;
    width: 0;
    border: 0;
    margin: 0;
    padding: 0;
  }
  .bi {
    cursor: pointer;
  }
</style>
