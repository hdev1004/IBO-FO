<script setup lang="ts">
import BaseTab from '@/components/tab/BaseTab.vue'
import scheduleManagerWork from './tabs/scheduleManagerWork.vue'
let tabs = ['근무일정', '휴가일정', '테스트', '응애요']
const tabChange = (value: any) => {
  console.log(value)
}
</script>

<template>
  <section class="schedule">
    <BaseTab :tabs="tabs" @tabChange="tabChange"></BaseTab>
    <section class="schedule-body">
      <scheduleManagerWork></scheduleManagerWork>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import url('./scheduleManager.css');
</style>
