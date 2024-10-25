<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="base-title">
    {{ props.text }}
  </section>
</template>

<style lang="scss" scoped>
@import url('./BaseTitle.css');
</style>
