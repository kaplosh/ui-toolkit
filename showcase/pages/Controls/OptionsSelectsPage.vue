<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
import ExampleItem from '../../components/ExampleItem.vue';
import { ref } from 'vue';

const allOptions = [
  { value: '1', item: 'Hyenk Nguyen' },
  { value: '2', item: 'Vilem Vilemovich' },
  { value: '3', item: 'Jarmil Krasomil' },
  { value: '4', item: 'Lopata Lopatovich' },
  { value: '5', item: 'Schmetle Petlich' },
  { value: '6', item: 'Jakakoliv Ex Tveho Výběru' },
];

const select1Values = ref([ allOptions[1] ]);
const select2Values = ref(
  allOptions.filter(item => Number(item.value) % 2 === 0),
);
const dropdown1Values = ref([ allOptions[2] ]);
const dropdown2Values = ref(
  allOptions.filter(item => Number(item.value) % 3 === 0),
);

</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      Options Select:
    </h2>
    <PageExamplesSection
      title="Options Select"
    >
      <ExampleItem text="single option select">
        <ui.controls.OptionsSelect
          v-model="select1Values"
          :options="allOptions"
        />
      </ExampleItem>

      <ExampleItem text="multiple option select with custom items">
        <ui.controls.OptionsSelect
          v-model="select2Values"
          :options="allOptions"
          multiple
        >
          <template #option="{ option, selected, onToggle, onChange }">
            <li
              class="list-group-item list-group-item-action"
              style="cursor: pointer;"
              @click="onToggle"
            >
              <div
                class="form-check form-switch"
              >
                <input
                  :id="`select2-${option.value}`"
                  :checked="selected"
                  class="form-check-input"
                  style="cursor: pointer;"
                  type="checkbox"
                  role="switch"
                  @change="onChange($event.target.checked)"
                  @click.stop
                >
                <label
                  class="form-check-label"
                  style="cursor: pointer;"
                  :for="`select2-${option.value}`"
                  @click.stop
                >
                  {{ option.item }}
                </label>
              </div>
            </li>
          </template>
        </ui.controls.OptionsSelect>
      </ExampleItem>
    </PageExamplesSection>

    <PageExamplesSection
      title="Options Select Dropdown"
    >
      <ExampleItem text="small dropdown select">
        <ui.controls.OptionsSelectDropdown
          v-model="dropdown1Values"
          :options="allOptions"
          small
        />
      </exampleitem>
      <ExampleItem text="dropdown multiple select">
        <ui.controls.OptionsSelectDropdown
          v-model="dropdown2Values"
          :options="allOptions"
          multiple
        />
      </exampleitem>
    </PageExamplesSection>
  </div>
</template>
