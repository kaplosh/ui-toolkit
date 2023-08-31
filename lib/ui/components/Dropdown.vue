<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref, watch } from 'vue';

const emit = defineEmits([ 'input' ]); // rename to `input`
interface Props {
  options: ui.OptionItem[];
  value: ui.OptionItem[];
  multiple: boolean;
  maxHeight?: number;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    maxHeight: 150,
  },
);
const {
  reference,
  floating,
  shown,
  floatingStyles,
} = ui.useFloatingList({});

const selectDefault = props.options.filter(item => Number(item.object.id) % 2 === 0);

const currentValue = ref(selectDefault);

watch(currentValue, (newValue) =>
{
  emit('input', newValue);
});

</script>

<template>
  <div
    class="dropdown d-inline-block"
  >
    <button
      ref="reference"
      class="btn btn-secondary dropdown-toggle"
      type="button"
      @click="shown = true"
    >
      Dropdown button
    </button>
    <div
      v-if="shown"
      ref="floating"
      class="dropdown-menu show"
      :style="floatingStyles"
    >
      <ui.controls.OptionsSelect
        :options="props.options"
        :value="props.value"
        :multiple="true"
        @input="currentValue = $event"
      >
        <template #item="{ item, selected, onClick }">
          <li
            :class="['list-group-item', selected && 'active' ]"
            @click="onClick"
          >
            {{ item.object.name }}
          </li>
        </template>
      </ui.controls.OptionsSelect>
    </div>
  </div>
</template>
