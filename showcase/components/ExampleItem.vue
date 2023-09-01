<script lang="ts" setup="">

interface Props {
  text?: string;
}

defineProps<Props>();

</script>

<template>
  <div class="col-md-6 col-lg-4 col-xl-3 mb-2">
    <h6 v-if="text">
      {{ text }}
    </h6>
    <slot />
  </div>
</template>
