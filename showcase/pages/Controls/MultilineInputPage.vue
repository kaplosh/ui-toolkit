<script lang="ts" setup="">
  import { ui } from '@ema/ui-toolkit';
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Multiline Text Inputs
    </h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        base:
        <ui.controls.MultilineTextInput value="" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        placeholder:
        <ui.controls.MultilineTextInput value="" placeholder="Multiline text filet" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        disabled:
        <ui.controls.MultilineTextInput value="" disabled="true"/>
      </div>
    </div>
  </div>
</template>
