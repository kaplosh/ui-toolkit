<script lang="ts" setup="">
import { ref } from 'vue';
import CardForAdd from '../../../lib/admin_tools/transaltions/CardForAdd.vue';
import TableComponent from '../../../lib/admin_tools/transaltions/TableComponent.vue';
import { TranslationRow } from '../../../lib/admin_tools/transaltions/types';
const newObj = ref<TranslationRow>({ key: '', translation: '' });



function handleNewRow(data: TranslationRow) {
  newObj.value = data;
}
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h1>Translation table</h1>
    //TODO
    <card-for-add @new="handleNewRow" />
    <table-component
      :new-obj="newObj"
    />
  </div>
</template>
y


