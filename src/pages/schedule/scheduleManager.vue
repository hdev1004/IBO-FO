<script setup lang="ts">
import BaseTab from '@/components/tab/BaseTab.vue'
let tabs = ['근무일정', '휴가일정', '테스트', '응애요']
const tabChange = (value: any) => {
  console.log(value)
}
</script>

<template>
  <section class="schedule">
    <BaseTab :tabs="tabs" @tabChange="tabChange"></BaseTab>
    <div class="schedule-body"></div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./scheduleManager.css');
</style>
