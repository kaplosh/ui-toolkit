<script lang="ts" setup="">

interface Props {
  title: string;
}

defineProps<Props>();

</script>

<template>
  <section>
    <h3>{{ title }}</h3>
    <div class="row">
      <slot />
    </div>
  </section>
</template>
