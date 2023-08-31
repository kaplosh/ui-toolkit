<script setup lang="ts">
// import { ui } from '@ema/ui-toolkit';
// import { ref } from 'vue';
// import { recordsDays } from '../mocks.ts';
// import { recordsMonths } from '../mocks.ts';
// import { recordsYears } from '../mocks.ts';
//
//
//
// const months: ui.OptionItem[] = recordsMonths.map(record => ({
//   value: record.id,
//   object: record,
// }));
//
//   const days1: ui.OptionItem[] = recordsDays[0].map(record => ({
//     value: record.id,
//     object: record,
//   }
// ));
//   const days2: ui.OptionItem[] = recordsDays[1].map(record => ({
//     value: record.id,
//     object: record,
//   }
// ));
// const days3: ui.OptionItem[] = recordsDays[2].map(record => ({
//     value: record.id,
//     object: record,
//   }
// ));
//
// const years: ui.OptionItem[] = recordsYears.map(record => ({
//   value: record.id,
//   object: record,
// }));
// const currentDays = ref(days1);
// const select1 = ref(currentDays.value.filter(item => Number(item.object.id) === 1));
// const select2 = ref(months.filter(item => Number(item.object.id) === 1));
// const select3 = ref(years.filter(item => Number(item.object.id) === 1));
//
// function setDays(){
//   const longMonths = [ '1','3','5','7','8','10','12' ];
//   const currentMonth = select2.value[0].object.id;
//   if(longMonths.includes(currentMonth)) {
//     currentDays.value = days3;
//   } else if (currentMonth==='2') {
//     currentDays.value = days1;
//   } else {
//     currentDays.value = days2;
//   }
// }
//


</script>

<!--<template>-->
<!--  <div class="container">-->
<!--    <div class="row">-->
<!--      <div class="col-md-6 col-lg-4 col-xl-3">-->
<!--        <h2>Day select</h2>-->
<!--        <ui.controls.OptionsSelectDropdown-->
<!--          :items="currentDays"-->
<!--          :selected="select1"-->
<!--          :single="true"-->
<!--          @change="select1 = $event"-->
<!--        >-->
<!--        </ui.controls.OptionsSelectDropdown>-->
<!--      </div>-->
<!--      <div class="col-md-6 col-lg-4 col-xl-3">-->
<!--        <h2>Month select</h2>-->
<!--        <ui.controls.OptionsSelectDropdown-->
<!--          :items="months"-->
<!--          :selected="select2"-->
<!--          :single="true"-->
<!--          @change="select2 = $event;"-->
<!--          @click="setDays()"-->
<!--        >-->
<!--        </ui.controls.OptionsSelectDropdown>-->
<!--      </div>-->
<!--      <div class="col-md-6 col-lg-4 col-xl-3">-->
<!--        <h2>Year select</h2>-->
<!--        <ui.controls.OptionsSelectDropdown-->
<!--          :items="years"-->
<!--          :selected="select3"-->
<!--          :single="true"-->
<!--          @change="select3 = $event"-->
<!--        >-->
<!--        </ui.controls.OptionsSelectDropdown>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

  <style scoped />
