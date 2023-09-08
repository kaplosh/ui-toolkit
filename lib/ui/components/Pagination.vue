<script lang="ts" setup="">
import { computed } from 'vue';
defineEmits([ 'select' ]);
const totalPages = [ 1, 2, 3 ];

const navigationElements = computed(() => {
  return new Array(totalPages.length);

});
</script>

<template>
  <div>
    <ul class="pagination">
      <button
        v-for="(_, index) in navigationElements"
        :key="index"
        class="btn btn-outline-primary rounded-1"
        @click="$emit('select', index + 1)"
      >
        {{ index + 1 }}
      </button>
    </ul>
  </div>
</template>

<style scoped>

</style>
