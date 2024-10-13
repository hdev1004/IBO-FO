<script setup lang="ts">
import Header from '@/layouts/header.vue'
import Menu from '@/layouts/menu.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

console.log(route.fullPath)
</script>

<template>
  <div v-if="route.path !== '/login'">
    <section>
      <Header></Header>
    </section>

    <section>
      <Menu></Menu>
    </section>
  </div>

  <RouterView />
</template>

<style lang="scss">
@import url('./App.css');
</style>
