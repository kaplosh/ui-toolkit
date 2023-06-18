<script lang="ts" setup="">
import useFloatingList from '../composables/useFloatingList';

const {
  reference,
  floating,
  shown,
  floatingStyles,
} = useFloatingList();
</script>

<template>
  <div
    class="dropdown d-inline-block"
  >
    <button
      ref="reference"
      class="btn btn-secondary dropdown-toggle"
      type="button"
      @click="shown = true"
    >
      Dropdown button
    </button>
    <ul
      v-if="shown"
      ref="floating"
      class="dropdown-menu show"
      :style="floatingStyles"
    >
      <slot />
    </ul>
  </div>
</template>
