<script lang="ts" setup="">
interface Props {
  record?: BRecord;
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
    <b-icon icon="card-heading" />&nbsp;{{ record.id }}
  </a>
  <div>
    <a
      v-if="showId"
      :href="fullPath"
      target="_blank"
      class="icon-link"
      @click.stop
    >
      <b-icon icon="card-heading" />&nbsp;{{ record.id }} {{ record.caption }}
    </a>
    <a
      v-else
      :href="fullPath"
      target="_blank"
      class="icon-link"
      @click.stop
    >
      <b-icon icon="card-heading" />&nbsp;{{ record.caption }}
    </a>
  </div>
</template>

<style scoped>

</style>
