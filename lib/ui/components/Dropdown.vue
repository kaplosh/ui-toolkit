<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';

const {
  reference,
  floating,
  shown,
  floatingStyles,
} = ui.useFloatingList({});
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
    <div
      v-if="shown"
      ref="floating"
      class="dropdown-menu show"
      :style="floatingStyles"
    >
      <slot />
    </div>
  </div>
</template>
