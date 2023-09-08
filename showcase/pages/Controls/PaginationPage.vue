<script lang="ts" setup="">
  import { ui } from '@ema/ui-toolkit';
  import ExampleItem from '../../components/ExampleItem.vue';
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Pagination:
    </h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        <ExampleItem>
          <ui.Pagination />
        </ExampleItem>
      </div>
    </div>
  </div>
</template>
