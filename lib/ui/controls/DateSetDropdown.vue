<script setup lang="ts">
 import { ui } from '@ema/ui-toolkit';
 import { ref } from 'vue';
 import { times } from 'lodash';

 const recordsMonths = times(12, i => {
  const id = i + 1;
  return { id, name: id  };
});

 const recordsDays = times(31, i => {
  const id = i + 1;
  return { id, name: id  };
});

 const recordsYears = times(30, i => {
   const id = (i + 1990) + 1;
   return { id, name: id  };
 });


 const months: ui.OptionItem[] = recordsMonths.map(record => ({
   value: record.id,
  item: record.name,
}));

 const days: ui.OptionItem[] = recordsDays.map(record => ({
     value: record.id,
     item: record.name,
   }
 ));

 const years: ui.OptionItem[] = recordsYears.map(record => ({
   value: record.id,
   item: record.name,
 }));

 const select1 = ref(days.filter(item => Number(item.value) === 1));
 const select2 = ref(months.filter(item => Number(item.value) === 1));
 const select3 = ref(years.filter(item => Number(item.value) === 1991));

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="">
        <div>Day select</div>
        <ui.controls.OptionsSelectDropdown
          v-model="select1"
          :options="days"
        />
      </div>
      <div class="">
        <div>Month select</div>
        <ui.controls.OptionsSelectDropdown
          v-model="select2"
          :options="months"
        />
      </div>
      <div class="">
        <div>Year select</div>
        <ui.controls.OptionsSelectDropdown
          v-model="select3"
          :options="years"
        />
      </div>
    </div>
  </div>
</template>

  <style scoped />
