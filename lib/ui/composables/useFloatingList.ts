import { ref, watch } from 'vue';
import { autoUpdate, flip, shift, size, useFloating } from '@floating-ui/vue';
import { Placement } from '@floating-ui/core/src/types';

export default function useFloatingList({
  placement = 'bottom-start',
}: {
  placement?: Placement
}) {
  const shown = ref(false);
  const reference = ref<null | HTMLElement>(null);
  const floating = ref<null | HTMLUListElement>(null);

  const { floatingStyles } = useFloating(reference, floating, {
    placement,
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

  return {
    reference,
    floating,
    shown,
    floatingStyles,
  };
}
