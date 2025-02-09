<script lang="ts" setup>
import ScrollLink from './ScrollLink.vue'
import SiteLogo from './SiteLogo.vue'
</script>

<template>
  <div class="flex-between flex-row header shadow">
    <SiteLogo />
    <div class="flex-between flex-row menu">
      <ScrollLink to="home">Home</ScrollLink>
      <ScrollLink to="services">Services</ScrollLink>
      <ScrollLink to="pricing">Pricing</ScrollLink>
    </div>
    <ScrollLink classes="btn-secondary" to="contact">
      <fa-icon :icon="['fas', 'dollar-sign']" />
      <span>Get a Free Consultation</span>
    </ScrollLink>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: $highlight;
  left: 0;
  padding: 1em 2em;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  .btn-secondary {
    margin: 0 !important;
  }

  .menu {
    a:not(.button) {
      color: $white;
      font-size: 1.5em;
      padding: 0.5em 1.5em;

      &:active,
      &:visited {
        color: $white;
      }

      &:hover {
        color: $primary;
      }
    }
  }
}
</style>
