<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
interface Props {
  record: ui.OptionItem;
  entity?: string;
  baseUrl?: string;
  showId?: boolean;
  onlyId?: boolean;
}

defineProps<Props>();

function path () {
  return `/database/${this.entity}/${this.record.id}`;
}

function fullPath () {
  let base = this.$router.options.base;
  if (base?.endsWith('/')) base = base.substring(0, base.length - 1);
  return `${base}${this.path}`;
}


</script>

<template>
  <a
    v-if="onlyId"
    :href="path"
    class="icon-link"
  >
    &nbsp;{{ record.value }}
  </a>
  <div>
    <a
      v-if="showId"
      :href="fullPath"
      target="_blank"
      class="icon-link"
      @click.stop
    >
      {{ record.value }} {{ record.item }}
    </a>
    <a
      v-else
      :href="fullPath"
      target="_blank"
      class="icon-link"
      @click.stop
    >
      &nbsp;{{ record.item }}
    </a>
  </div>
</template>

<style scoped>

</style>
