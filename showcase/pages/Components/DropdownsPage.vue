<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
import ExampleItem from '../../components/ExampleItem.vue';
</script>

<template>
  <div class="container">
    <a href="#/">go home</a>
    <h2 class="mt-4">
      UI Components
    </h2>
    <PageExamplesSection
      title="Dropdown"
    >
      <ExampleItem
        text="dropdown list"
      >
        <ui.Dropdown>
          <template #button>
            dropdown
          </template>
          <a
            class="dropdown-item"
            href="#"
            @click.prevent="()=>{}"
          >Action</a>
          <hr class="dropdown-divider">
          <div class="dropdown-item">
            next item
          </div>
          <div class="dropdown-item">
            next item 2
          </div>
        </ui.Dropdown>
      </ExampleItem>
      <ExampleItem
        text="small"
      >
        <ui.Dropdown small>
          <template #button>
            dropdown
          </template>
          <div class="dropdown-item">
            item 1
          </div>
          <div class="dropdown-item">
            item 2
          </div>
        </ui.Dropdown>
      </ExampleItem>
      <ExampleItem
        text="only caret"
      >
        <ui.Dropdown caret>
          <div class="dropdown-item">
            item 1
          </div>
          <div class="dropdown-item">
            item 2
          </div>
        </ui.Dropdown>
      </ExampleItem>
      <ExampleItem
        text="custom content"
      >
        <ui.Dropdown caret>
          <template #button>
            dropdown custom
          </template>
          <ul class="m-2 list-group">
            <li class="list-group-item list-group-item-action">
              text 1
            </li>
            <li class="list-group-item list-group-item-action active">
              text 2
            </li>
          </ul>
          <p class="text-center">
            some text
          </p>
        </ui.Dropdown>
      </ExampleItem>
    </PageExamplesSection>
  </div>
</template>
