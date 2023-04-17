<script lang="ts" setup="">
  import { ui } from '@ema/ui-toolkit';
  import { ref } from 'vue';
  const value1 = ref('Text');
  const value2 = ref('');

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
        <ui.controls.InputField
          :value="value1"
          @change="value1=$event"
        />
        <div>{{ value1 }}</div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        placeholder:
        <ui.controls.InputField
          :value="value2"
          placeholder="Input filet"
          @change="value2=$event"
        />
        <div>{{ value2 }}</div>
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
