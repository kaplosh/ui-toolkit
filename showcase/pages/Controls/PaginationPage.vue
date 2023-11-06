<script lang="ts" setup="">
  import { ui } from '@ema/ui-toolkit';
  import ExampleItem from '../../components/ExampleItem.vue';

 const page = 1;
 const records = [ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1  ];
 const perPage = 5;

/*
 const pagesCount =
*/
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
          <ui.Pagination
            :page="page"
            :records-total="records"
            :per-page="perPage"
            :records="records"
          />
        </ExampleItem>
      </div>
    </div>
  </div>
</template>
