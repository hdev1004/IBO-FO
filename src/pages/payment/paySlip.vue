<script setup lang="ts">
import BlueDownloadButton from '@/components/buttons/BlueDownloadButton.vue'
import type { commonTableHeaders } from '@/types/index'
import router from '@/router'

const headers = ref<Array<commonTableHeaders>>([
  {
    key: 'empList',
    title: '부서'
  },
  {
    key: 'empName',
    title: '이름'
  },
  {
    key: 'totalPay',
    title: '실지급액'
  },
  {
    key: 'realPay',
    title: '지급총액'
  },
  {
    key: 'minusPay',
    title: '공제총액'
  },
  {
    key: 'download',
    title: '급여명세서'
  }
])

const tableData = [
  {
    empList: '정보보안부서',
    empName: '장서온',
    totalPay: '200,000,000',
    realPay: '170,000,000',
    minusPay: '30,000,000',
    download: ''
  }
]
</script>

<template>
  <form>
    <div class="searchBox">
      <select name="empAppointmentList" id="empAppointmentList">
        <option selected disabled>부서를 선택해주세요.</option>
        <option value="appointAll">전체</option>
        <option value="moveDept">부서이동</option>
        <option value="promote">승진</option>
        <option value="leave">휴직</option>
        <option value="retire">퇴직</option>
      </select>
      <input class="searchBoxName" type="text" placeholder="이름을 입력해주세요." />
    </div>
    <div class="buttonArea">
      <BaseBlueButton width="70px" height="35px" font-size="14px" text="검색"></BaseBlueButton>
      <BaseBlueButton
        class="sendMail"
        width="180px"
        height="35px"
        font-size="14px"
        text="급여명세서 이메일 발송"
      ></BaseBlueButton>
    </div>
  </form>
  <main class="container">
    <EmpTable :headers="headers" :data="tableData">
      <template #download="{ data }">
        <BlueDownloadButton
          width="180px"
          height="30px"
          style="margin-left: 30px"
        ></BlueDownloadButton>
      </template>
    </EmpTable>
  </main>
</template>

<style lang="scss" scoped>
@import url(./paySlip.css);
</style>
