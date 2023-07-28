<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref, watch } from 'vue';
const emit = defineEmits([ 'change' ]);
interface Props {
  items: ui.OptionItem[];
  selected: ui.OptionItem[];
  single?: boolean;
}

const props = defineProps<Props>();
const select = ref( props.selected);

watch(select, (newSelect)=>
  emit('change', newSelect));



</script>

<template>
  <div class="d-inline-block">
    <ui.OptionsSelectDropdown
      :items="props.items"
      :selected="props.selected"
      :single="props.single"
      @change="select = $event"
    >
      <template #selected="{ items }">
        <span
          v-if="!items.length"
          class="btn btn-secondary"
        >-</span>
        <span
          v-if="items.length === 1"
          class="btn btn-secondary"
        >{{ items[0].object.name }}</span>
        <span
          v-if="items.length > 1"
          class="btn btn-secondary"
        >[ {{ items.length }} ]</span>
      </template>
      <template #item="{ item, selected, onClick }">
        <li
          :class="['list-group-item', selected && 'active' ]"
          @click="onClick"
        >
          {{ item.object.name }}
        </li>
      </template>
    </ui.OptionsSelectDropdown>
  </div>
</template>

<style scoped>
.list-group{
  max-height: 100px;
  overflow-y: scroll;
}
.list-group-item {
  cursor: pointer;
}
</style>
