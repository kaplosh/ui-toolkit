<script lang="ts" setup="">
import { computed, ref } from 'vue';
defineEmits([ 'select' ]);
interface Props {
  page: number,
  perPage: number,
  records: any,
  recordsTotal: number,
}
const props = defineProps<Props>();

const currentPage = ref(props.page);
const lastPage = ref(props.records.length);
const totalPages =  ref(props.recordsTotal/props.perPage);

function onPageChange(value) {
  if (!isNaN(currentPage.value)) {
  currentPage.value = currentPage.value + value;
    if (currentPage.value < 1) {
      currentPage.value = 1;
    }
    if (currentPage.value > lastPage.value) {
      currentPage.value = lastPage.value;
    }
  }
}
function onLastPage() {
  currentPage.value = lastPage.value;
}
</script>

<template>
  <div>
    <ul class="pagination">
      <button
        v-if="currentPage !== 1"
        class="btn btn-outline-primary rounded-1"
        @click="onPageChange(-currentPage-1)"
      >
        First page
      </button>
      <button
        v-if="currentPage> 10"
        class="btn btn-outline-primary rounded-1"
        @click="onPageChange(-10)"
      >
        {{ currentPage - 10 }}
      </button>
      <button
        v-if="currentPage > 3"
        class="btn btn-outline-primary rounded-1"
        @click="onPageChange(-3)"
      >
        {{ currentPage -3 }}
      </button>
      <button
        v-if="currentPage !== 1"
        class="btn btn-outline-primary rounded-1"
        @click="onPageChange(-1)"
      >
        {{ currentPage - 1 }}
      </button>
      <button
        class="btn btn-outline-primary rounded-1"
        disabled
      >
        {{ "This is" + currentPage }}
      </button>
      <button
        v-if="currentPage < lastPage - 1"
        class="btn btn-outline-primary rounded-1"
        @click="onPageChange(1)"
      >
        {{ currentPage + 1 }}
      </button>
      <button
        v-if="currentPage < lastPage - 3"
        class="btn btn-outline-primary rounded-1"
        @click="onPageChange(+3)"
      >
        {{ currentPage +3 }}
      </button>
      <button
        v-if="currentPage < lastPage - 10 "
        class="btn btn-outline-primary rounded-1"
        @click="onPageChange(+10)"
      >
        +10
      </button>
      <button
        v-if="currentPage !== lastPage"
        class="btn btn-outline-primary rounded-1"
        @click="onLastPage"
      >
        Last page
      </button>
    </ul>
  </div>
</template>

<style scoped>

</style>
