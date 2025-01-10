<script setup lang="ts">
import BaseTitle from '@/components/title/BaseTitle.vue'
import SignWait from './attendanceSignTab/SignWait.vue'
import SignApproval from './attendanceSignTab/SignApproval.vue'
import SignReturn from './attendanceSignTab/SignReturn.vue'

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
  <BaseTitle text="내 결재 문서" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="conatiner">
    <BaseTab :tabs="tabs" @tabChange="tabChange"></BaseTab>
    <section
      class="document__body"
      :class="nowTab.tab === '대기' ? 'document__body-show' : 'document__body-hidden'"
    >
      <SignWait></SignWait>
    </section>
    <section
      class="document__body"
      :class="nowTab.tab === '승인' ? 'document__body-show' : 'document__body-hidden'"
    >
      <SignApproval></SignApproval>
    </section>
    <section
      class="document__body"
      :class="nowTab.tab === '반려' ? 'document__body-show' : 'document__body-hidden'"
    >
      <SignReturn></SignReturn>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url('./attendanceSign.css');
</style>
