<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref } from 'vue';

interface Props {
  options: ui.OptionItem[];
  modelValue: ui.OptionItem[];
  multiple?: boolean;
  menuMaxHeight?: number;
  small?: boolean;
}

defineProps<Props>();

const allOptions = [
  { value: '1', item: 'Hyenk Nguyen' },
  { value: '2', item: 'Vilem Vilemovich' },
  { value: '3', item: 'Jarmil Krasomil' },
  { value: '4', item: 'Lopata Lopatovich' },
  { value: '5', item: 'Schmetle Petlich' },
  { value: '6', item: 'Jakakoliv Ex Tveho Výběru' },
];

const select1Values = ref([ allOptions[1] ]);


</script>

<template>
  <div>
    <ui.controls.OptionsSelectDropdown
      v-model="select1Values"
      :options="allOptions"
      bLink
      multiple
    />
  </div>
</template>

