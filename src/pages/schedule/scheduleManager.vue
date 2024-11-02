<script setup lang="ts">
import BaseTab from '@/components/tab/BaseTab.vue'
import scheduleManagerWork from './tabs/scheduleManagerWork.vue'
import scheduleManagerVacation from './tabs/scheduleManagerVacation.vue'
import scheduleManagerWorkModal from './tabs/scheduleManagerWorkModal.vue'
import { useSchduleStore } from '@/stores/schdule'

const useSchedule = useSchduleStore()

let tabs = ['근무일정', '휴가일정']

let nowTab = ref({
  tab: '근무일정',
  idx: 0
})

const tabChange = (value: any) => {
  console.log(value)
  nowTab.value = value
}
</script>

<template>
  <section class="schedule">
    <BaseTab :tabs="tabs" @tabChange="tabChange"></BaseTab>
    <div class="schedule-slide">
      <section
        class="schedule-body schedule-body-work"
        :class="nowTab.tab === '근무일정' ? 'schedule-body--show' : 'schedule-body--hidden'"
      >
        <scheduleManagerWork></scheduleManagerWork>
      </section>
      <section
        class="schedule-body schedule-body-vacation"
        :class="nowTab.tab === '휴가일정' ? 'schedule-body--show' : 'schedule-body--hidden'"
      >
        <scheduleManagerVacation></scheduleManagerVacation>
      </section>
    </div>
  </section>

  <section v-if="useSchedule.getIsSchedule()">
    <scheduleManagerWorkModal></scheduleManagerWorkModal>
  </section>
</template>

<style lang="scss" scoped>
@import url('./scheduleManager.css');
</style>
