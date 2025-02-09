<script lang="ts" setup>
import type { Link } from '@/includes/types'

const props = defineProps<Link>()

function scrollTo(ev: MouseEvent) {
  ev.preventDefault()
  ev.stopPropagation()

  const el = document.getElementById(props.to)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <a @click="scrollTo" :class="classes" href="#">
    <slot />
  </a>
</template>

<style lang="scss" scoped></style>
