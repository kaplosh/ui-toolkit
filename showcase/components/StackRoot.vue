<script setup lang="ts">
import { h, ref } from 'vue';
import { getPageForPathname } from '../pages';
import VoidPage from '../pages/VoidPage.vue';

const page = ref(getPageForPathname());

function PageContent() {
  const currentPage = page.value;
  if (currentPage) {
    return h(currentPage.component);
  } else {
    return h(VoidPage);
  }
}

window.addEventListener('popstate', () => {
  page.value = getPageForPathname();
});
</script>

<template>
  <PageContent />
</template>

<style>
  body {
    margin-top: 12px;
  }
</style>
