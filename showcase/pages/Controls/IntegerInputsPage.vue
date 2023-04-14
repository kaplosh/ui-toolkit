<script lang="ts" setup="">
  import { ui } from '@ema/ui-toolkit';
  import { ref } from 'vue';
  const value1 = ref(56);
  const value2 = ref(69);

</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Number Inputs
    </h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        integer:
        <ui.controls.IntegerInput
          :value="value1"
          @change="value1=$event"
        />
        <div>{{ value1 }}</div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        number:
        <ui.controls.NumberInput
          :value="value2"
          @change="value2=$event"
        />
        <div>{{ value2 }}</div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        disabled:
        <!--        <ui.controls.IntegerInputField value="" :disabled="true"/>-->
      </div>
    </div>
  </div>
</template>
