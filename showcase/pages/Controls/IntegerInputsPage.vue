<script lang="ts" setup="">
  import { ui } from '@ema/ui-toolkit';
  import { ref } from 'vue';
  const value1 = ref(56);

  function aaa (a, b) {
    console.log(a, b);
  }
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Number Inputs
    </h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        base:
        <ui.controls.IntegerInput
          :value="value1"
          @change="value1=$event"
        />
        <div>{{ value1 }}</div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        placeholder:
        <!--        <ui.controls.IntegerInputField value="" placeholder="Number filet" />-->
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        disabled:
        <!--        <ui.controls.IntegerInputField value="" :disabled="true"/>-->
      </div>
    </div>
  </div>
</template>
