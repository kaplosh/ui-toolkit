<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';

interface Props {
  caret?: boolean;
  small?: boolean;
  prependClass?: string;
  customMenu?: boolean;
}

defineProps<Props>();

const {
  reference,
  floating,
  shown,
  floatingStyles,
} = ui.useFloatingList();
</script>

<template>
  <div
    ref="reference"
    class="d-flex overflow-auto"
  >
    <div
      v-if="$slots.prepend"
      :class="['d-flex flex-fill custom-row', prependClass]"
    >
      <slot name="prepend" />
    </div>
    <button
      :class="[
        'btn btn-secondary d-flex align-items-center',
        small && 'btn-sm',
      ]"
      type="button"
      @click="shown = true"
    >
      <div v-if="$slots.button">
        <slot
          name="button"
          :shown="shown"
        />
      </div>
      <i
        v-if="caret"
        :class="['caret', 'bi', `bi-caret-${shown ? 'up' : 'down'}`]"
      />
    </button>
  </div>
  <div
    v-if="shown"
    ref="floating"
    :class="['dropdown-menu show', customMenu && 'p-0 border-0']"
    :style="floatingStyles"
  >
    <slot />
  </div>
</template>

<style scoped>
.caret:not(:first-child) {
  margin-left: 8px;
}
.custom-row {
  height: 40px;
}
</style>
