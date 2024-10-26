<script setup lang="ts">
import Header from '@/layouts/header.vue'
import Menu from '@/layouts/menu.vue'
import { useRoute } from 'vue-router'
import { useMenuOpenStore } from './stores/menu'

const openStore = useMenuOpenStore()

const route = useRoute()

console.log(route.fullPath)
</script>

<template>
  <!-- 로그인 아닐경우 페이지 분리-->
  <div v-if="route.path !== '/login'">
    <section>
      <Header></Header>
    </section>

    <section class="contents">
      <Menu></Menu>
      <el-scrollbar class="pages" @click="openStore.setIsShow(false)">
        <RouterView />
      </el-scrollbar>
    </section>
  </div>

  <div v-else>
    <RouterView />
  </div>
</template>

<style lang="scss">
@import url('./App.css');
</style>
