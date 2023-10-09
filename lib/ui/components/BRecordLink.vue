<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';

interface Props {
  record: ui.Record;
}

const props = defineProps<Props>();

function path () {
  return `/database/records/${props.record.id}`;
}

</script>

<template>
  <a
    :href="path"
    class="icon-link"
  >
    &nbsp;{{ record.caption }}
  </a>
</template>
