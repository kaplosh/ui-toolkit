<script lang="ts" setup="">
  import { ui } from '@ema/ui-toolkit';
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Radio inputs
    </h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        base:
        <ui.controls.RadioInput value="" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        disabled:
        <ui.controls.RadioInput
          value=""
          disabled="true"
        />
      </div>
    </div>
  </div>
</template>
