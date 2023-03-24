<script lang="ts" setup="">
import { pages } from '.';
</script>

<template>
  <div class="container">
    <div class="row">
      <ul>
        <li
          v-for="([name, page]) in Object.entries(pages)"
          :key="name"
        >
          <a :href="`#${page.pathname}`">{{ name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
