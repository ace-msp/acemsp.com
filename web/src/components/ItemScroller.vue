<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

import type { Scroller } from '@/includes/types'

const props = defineProps<Scroller>()

const index = ref(0)
const intervalId = ref(0)
const isRunning = ref(false)

function start() {
  if (!isRunning.value) {
    intervalId.value = setInterval(() => {
      if (index.value < props.items.length - 1) {
        index.value += 1
      } else {
        index.value = 0
      }
    }, 1000)
    isRunning.value = true
  }
}

function stop() {
  isRunning.value = false
}

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <div class="bg-primary flex-between flex-row scroller">
    <div v-for="item in items" :key="item.label">
      <div :class="['item', item.label === items[index].label ? 'highlight' : '']">
        <fa-icon :icon="[item.prefix, item.icon]" />
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroller {
  padding: 2em;

  .item {
    font-size: 2em;
    padding: 1em;
    opacity: 0.25;
    transition: all ease-in 0.5s;

    &.highlight {
      opacity: 1;
    }

    span {
      margin-left: 0.5em;
    }
  }
}
</style>
