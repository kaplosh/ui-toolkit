<script setup lang="ts">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
import ExampleItem from '../../components/ExampleItem.vue';
import { ref } from 'vue';

const datePicked = ref(new Date());
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Date set:
    </h2>
    <PageExamplesSection
      title=""
    >
      <ExampleItem text="Default date set">
        <ui.controls.DateSet />
      </exampleitem>
      <ExampleItem text="Library based date picker">
        <ui.controls.DatePick v-model="datePicked" />
      </ExampleItem>
    </PageExamplesSection>
  </div>
</template>

<style scoped>

</style>
