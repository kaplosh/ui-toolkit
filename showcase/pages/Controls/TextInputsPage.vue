<script lang="ts" setup="">
  import { ui } from '../../../lib';
  const { InputField } = ui.controls;
  function onChange(value) {
    console.log(value);
  }
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Text Inputs:
    </h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        <InputField value="" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <InputField
          value=""
          placeholder="Input filet"
        />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <InputField
          value=""
          :disabled="true"
        />
      </div>
    </div>
  </div>
</template>
