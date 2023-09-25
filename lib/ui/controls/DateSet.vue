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

 const recordsYears = times(20, i => {
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
   const days2: ui.OptionItem[] = recordsDays.map(record => ({
     value: record.id,
     item: record.name,
   }
 ));
 const days3: ui.OptionItem[] = recordsDays.map(record => ({
     value: record.id,
     item: record.name,
   }
 ));

 const years: ui.OptionItem[] = recordsYears.map(record => ({
   value: record.id,
   item: record.name,
 }));
 const currentDays = ref(days);
 /*const select1 = ref();
 const select2 = ref();
 const select3 = ref();
*/
 const select1 = ref(currentDays.value.filter(item => Number(item.value) === 1));
 const select2 = ref(months.filter(item => Number(item.value) === 1));
 const select3 = ref(years.filter(item => Number(item.value) === 1991));

 function setDays(){
   const longMonths = [ '1','3','5','7','8','10','12' ];
   const currentMonth = select2.value[0].value;
   if (longMonths.includes(currentMonth)) {
     currentDays.value = days3;
   } else if (currentMonth==='2') {
     currentDays.value = days;
   } else {
    currentDays.value = days2;
  }
 }




</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        <h2>Day select</h2>
        <ui.controls.OptionsSelectDropdown
          v-model="select1"
          :options="days"

        />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <h2>Month select</h2>
        <ui.controls.OptionsSelectDropdown
          v-model="select2"
          :options="months"

        />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <h2>Year select</h2>
        <ui.controls.OptionsSelectDropdown
          v-model="select3"
          :options="years"

        />
      </div>
    </div>
  </div>
</template>

  <style scoped />
