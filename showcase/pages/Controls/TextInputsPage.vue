<script lang="ts" setup="">
  import { ui } from '@ema/ui-toolkit';
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Text Inputs:
    </h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        base:
        <ui.controls.InputField value="" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        placeholder:
        <ui.controls.InputField
          value=""
          placeholder="Input filet"
        />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        disabled:
        <ui.controls.InputField
          value=""
          :disabled="true"
        />
      </div>
    </div>
  </div>
</template>
