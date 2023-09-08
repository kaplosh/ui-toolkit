<script lang="ts" setup="">
import { computed } from 'vue';
defineEmits([ 'select' ]);
interface Props {
  totalPages: number,
}
const props = defineProps<Props>();

const navigationElements = computed(() => {
  return new Array(props.totalPages);

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
