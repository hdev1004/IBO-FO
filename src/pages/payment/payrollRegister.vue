<script setup lang="ts">
import type { TableColumnCtx } from 'element-plus'

interface User {
  cate: string
  date: string
  payDate: string
  paySlip: string
  down: string
}

const tableData: User[] = [
  {
    cate: '일반근로소득',
    date: '2024-12',
    payDate: '2024-12-10',
    paySlip: ' ',
    down: '-'
  },
  {
    cate: '일반근로소득',
    date: '2024-11',
    payDate: '2024-11-08',
    paySlip: ' ',
    down: '-'
  },
  {
    cate: '일반근로소득',
    date: '2024-10',
    payDate: '2024-10-10',
    paySlip: ' ',
    down: '-'
  }
]
</script>

<template>
  <main class="container">
    <el-table
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column prop="cate" label="구분" width="180" />
      <el-table-column prop="date" label="귀속연월" width="180" />
      <el-table-column prop="payDate" label="급여지급일" sortable width="180" />
      <el-table-column prop="pay" label="급여대장" />
      <el-table-column prop="paySlip" label="급여명세서" width="180" />
      <el-table-column prop="down" label="기타 첨부파일" width="180" />
    </el-table>
  </main>
</template>

<style lang="scss" scoped>
@import url(./payrollRegister.css);
</style>
