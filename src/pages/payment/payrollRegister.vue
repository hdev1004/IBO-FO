<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import BaseWhiteButton from '@/components/buttons/BaseWhiteButton.vue'
import type { commonTableHeaders } from '@/types/index'
import router from '@/router'

const showDetailPaySlip = () => {
  router.push({ path: '/payment/detailPaySlip' })
}

const headers = ref<Array<commonTableHeaders>>([
  {
    key: 'cate',
    title: '구분'
  },
  {
    key: 'date',
    title: '귀속연월'
  },
  {
    key: 'payDate',
    title: '급여지급일'
  },
  {
    key: 'pay',
    title: '급여대장'
  },
  {
    key: 'paySlip',
    title: '급여명세서'
  },
  {
    key: 'down',
    title: '기타 첨부파일'
  }
])

const tableData = [
  {
    cate: '일반근로소득',
    date: '2024-12',
    payDate: '2024-12-10',
    pay: '',
    paySlip: ' ',
    down: '-'
  },
  {
    cate: '일반근로소득',
    date: '2024-11',
    payDate: '2024-11-08',
    pay: '',
    paySlip: ' ',
    down: '-'
  },
  {
    cate: '일반근로소득',
    date: '2024-10',
    payDate: '2024-10-10',
    pay: '',
    paySlip: ' ',
    down: '-'
  }
]
</script>

<template>
  <main class="container">
    <EmpTable :headers="headers" :data="tableData">
      <template #pay="{ data }">
        <span style="color: #05153b">급여대장_10월.xlsx</span>
        <BaseBlueButton
          width="200px"
          height="30px"
          text="2024-01-12 17:37 확정함"
          style="margin-left: 15px"
        ></BaseBlueButton>
      </template>
      <template #paySlip="{ data }">
        <BaseWhiteButton
          @click="showDetailPaySlip"
          width="150px"
          height="35px"
          text="급여명세서 보기"
          style="margin-left: 40px; color: #717179"
        ></BaseWhiteButton>
      </template>
    </EmpTable>
  </main>
</template>

<style lang="scss" scoped>
@import url(./payrollRegister.css);
</style>
