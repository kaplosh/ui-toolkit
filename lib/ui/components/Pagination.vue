<script lang="ts" setup="">
import { computed, ref } from 'vue';
defineEmits([ 'select' ]);
interface Props {
  page: number,
  perPage: number,
  pagesCount: number,
  recordsTotal: number,
}
const props = defineProps<Props>();

const currentPage = ref(props.page);
const firstPage = ref(props.recordsTotal[0]);
const totalPages =  ref(props.recordsTotal/props.perPage)||ref(props.pagesCount);


function onPageChange(value) {
  if (!isNaN(currentPage.value)) {
  currentPage.value = currentPage.value + value;
    if (currentPage.value < 1) currentPage.value = 1;
    if (currentPage.value > totalPages.value) currentPage.value = totalPages.value;
  }
}
</script>

<template>
  <div>
    <ul class="pagination">
      <button
        class="btn btn-outline-primary rounded-1"
        :disabled="currentPage === 1"
        @click="onPageChange(-totalPages+1)"
      >
        First
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        :disabled="currentPage < 10"
        @click="onPageChange(-10)"
      >
        -10
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        :disabled="currentPage < 3"
        @click="onPageChange(-3)"
      >
        -3
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        :disabled="currentPage === firstPage"
        @click="onPageChange(-1)"
      >
        Previous
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        disabled
      >
        {{ currentPage }}
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        :disabled="currentPage === totalPages"
        @click="onPageChange(1)"
      >
        Next
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        :disabled="currentPage > totalPages - 3"
        @click="onPageChange(+3)"
      >
        +3
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        @click="onPageChange(+10)"
        :disabled="currentPage > totalPages - 10"
      >
        +10
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        :disabled="currentPage === totalPages"
        @click="onPageChange(totalPages-currentPage)"
      >
        Last
      </button>
    </ul>
  </div>
</template>

<style scoped>

</style>
