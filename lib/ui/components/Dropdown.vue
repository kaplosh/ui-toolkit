<script lang="ts" setup="">
import { ref, watch } from 'vue';
import { useFloating, autoUpdate, flip, shift, size } from '@floating-ui/vue';

const reference = ref<null | HTMLButtonElement>(null);
const floating = ref<null | HTMLUListElement>(null);
const { floatingStyles } = useFloating(reference, floating, {
  placement: 'bottom-start',
  whileElementsMounted: autoUpdate,
  middleware: [
    flip(),
    shift(),
    size({
      apply({ rects }) {
        const floatingRef = floating.value;
        if (!floatingRef) return;
        const referenceWidth = Math.floor(rects.reference.width);
        const floatingWidth = Math.floor(rects.floating.width);
        if (floatingWidth < referenceWidth) {
          floatingRef.style.minWidth = `${rects.reference.width}px`;
        }
      },
    }),
  ],
});
const shown = ref(false);

function onClickBody(event) {
  if (!floating.value?.contains(event.target)) {
    shown.value = false;
  }
  if (reference.value?.contains(event.target)) {
    event.stopPropagation();
  }
}

watch(floating, () => {
  if (floating.value) {
    document.addEventListener('click', onClickBody, true);
  } else {
    document.removeEventListener('click', onClickBody, true);
  }
});
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
      <li>
        <a
          class="dropdown-item"
          href="#"
        >goto root</a>
      </li>
      <li>
        <div class="dropdown-item">
          text 1
        </div>
      </li>
      <li>
        <div class="dropdown-item">
          text 2
        </div>
      </li>
    </ul>
  </div>
</template>
