<script lang="ts" setup>
  import { ref } from 'vue';
  import { ui } from '@ema/ui-toolkit';
  import { data } from '../../../lib/ui/controls/mockDb';

</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Checkbox inputs
    </h2>
    <div class="row">
      <div
        class="col-md-6 col-lg-4 col-xl-3"
      >
        base:
        <ui.controls.CheckBoxField @change="checked = $event" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        disabled:
        <ui.controls.CheckBoxField
          disabled="true"
        />
      </div>
    </div>
  </div>
</template>
