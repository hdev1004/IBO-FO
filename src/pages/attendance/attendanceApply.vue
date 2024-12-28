<script setup lang="ts">
import BaseTitle from '@/components/title/BaseTitle.vue'
import LineTab from '@/components/tab/LineTab.vue'
import { now } from '@vueuse/core'
import ApplyWait from './attendanceApplyTab/applyWait.vue'
import ApplyApproval from './attendanceApplyTab/applyApproval.vue'
import ApplyReturn from './attendanceApplyTab/applyReturn.vue'

let tabs = ['대기', '승인', '반려']

let nowTab = ref({
  tab: '대기',
  idx: 0
})

const tabChange = (value: any) => {
  console.log(value)
  nowTab.value = value
}
</script>

<template>
  <BaseTitle text="내 신청 문서" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="conatiner">
    <BaseTab :tabs="tabs" @tabChange="tabChange"></BaseTab>
    <section
      class="document__body"
      :class="nowTab.tab === '대기' ? 'document__body-show' : 'document__body-hidden'"
    >
      <ApplyWait></ApplyWait>
    </section>
    <section
      class="document__body"
      :class="nowTab.tab === '승인' ? 'document__body-show' : 'document__body-hidden'"
    >
      <ApplyApproval></ApplyApproval>
    </section>
    <section
      class="document__body"
      :class="nowTab.tab === '반려' ? 'document__body-show' : 'document__body-hidden'"
    >
      <ApplyReturn></ApplyReturn>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url('./attendanceApply.css');
</style>
