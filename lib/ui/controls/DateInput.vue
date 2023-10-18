<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  domId?: string;
  disabled?: boolean;
  value?: Date;
  min?: Date;
  max?: Date;
}

const props = defineProps<Props>();

const emits = defineEmits([ 'onChange' ]);

const date = ref(props.value);

function onChange()
{
  emits('onChange', date.value);
}

</script>

<template>
  <div class="container">
    <div class="row">
      <input
        id="start"
        v-model="date"
        type="date"
        name="date-input"
        :min="props.min?? '' "
        :max="props.max?? '' "
        @input="onChange"
      >
    </div>
  </div>
</template>

  <style scoped />
