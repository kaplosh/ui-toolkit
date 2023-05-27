<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import { ref, watch } from 'vue';
import CardForAdd from '../../../lib/admin_tools/transaltions/CardForAdd.vue';
import TableComponent from '../../../lib/admin_tools/transaltions/TableComponent.vue';
import SearchingComponent from '../../../lib/admin_tools/transaltions/SearchingComponent.vue';
import { TranslationRow } from '../../../lib/admin_tools/transaltions/types';
const items = ref<TranslationRow[]>;
const list = ref([]);
const currentEdit = ref<string|null>('nothing');
const newObj = ref<TranslationRow>({});
const query = ref('');

function handleRefresh(updatedItems: TranslationRow[]){
  this.items = updatedItems;
}
function handleNewRow(data: TranslationRow) {
  newObj.value = data;
}
function handleQuery(data){
  query.value = data;
}
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h1>Translation table</h1>
    //TODO
    <card-for-add @new="handleNewRow" />
    <searching-component
      @search="handleQuery"
      @refresh="handleRefresh"
    />
    <table-component
      :new-obj="newObj"
      :query="query"
      @refresh="items = $event"
    />
  </div>
</template>
y


