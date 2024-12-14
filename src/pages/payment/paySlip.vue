<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'

interface User {
  empList: string
  empName: string
  totalPay: string
  realPay: string
  minusPay: string
  download: string
}

const tableData: User[] = [
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
    </div>
  </form>
  <main class="container">
    <el-table
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column prop="empList" label="부서" width="180" />
      <el-table-column prop="empName" label="이름" width="180" />
      <el-table-column prop="totalPay" label="실지급액" sortable width="180" />
      <el-table-column prop="realPay" label="지급총액" />
      <el-table-column prop="minusPay" label="공제총액" width="180" />
      <el-table-column prop="download" label="급여명세서" width="180" />
    </el-table>
  </main>
</template>

<style lang="scss" scoped>
@import url(./paySlip.css);
</style>
