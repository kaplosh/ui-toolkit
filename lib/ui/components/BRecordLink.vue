<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';

interface Props {
  record: ui.OptionItem<ui.Record>;
}

const props = defineProps<Props>();

function path () {
  return `/database/records/${props.record.item.id}`;
}

</script>

<template>
  <a
    :href="path"
    class="icon-link"
  >
    &nbsp;{{ record.item.caption }}
  </a>
</template>
