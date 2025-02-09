<script lang="ts" setup>
import { RouterView } from 'vue-router'

import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'
</script>

<template>
  <SiteHeader />
  <div class="body">
    <RouterView />
  </div>
  <SiteFooter />
</template>

<style lang="scss" scoped>
.body {
  padding: 8em 0 0 0;
}
</style>
