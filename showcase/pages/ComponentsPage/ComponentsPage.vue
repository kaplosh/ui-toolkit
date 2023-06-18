<script lang="ts" setup="">
import { ui } from '@ema/ui-toolkit';
import PageExamplesSection from '../../components/PageExamplesSection.vue';
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
      <div class="col-md-6 col-lg-4 col-xl-3">
        <ui.Dropdown>
          <li>
            <a
              class="dropdown-item"
              href="#"
            >goto root</a>
          </li>
          <li>
            <div class="dropdown-item">
              text 1
            </div>
          </li>
        </ui.Dropdown>
      </div>
    </PageExamplesSection>
  </div>
</template>
