<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import BaseWhiteButton from '@/components/buttons/BaseWhiteButton.vue'
import EmpSearchBar from '@/components/searchBar/EmpSearchBar.vue'
import EmpTable from '@/components/table/EmpTable.vue'
import type { commonTableHeaders } from '@/types/index'

const vacationDate = ref(null)
const headers = ref<Array<commonTableHeaders>>([
  {
    key: 'seq',
    title: '번호',
    width: 100
  },
  {
    key: 'type',
    title: '발령 구분'
  },
  {
    key: 'date',
    title: '발령일자'
  },
  {
    key: 'emp',
    title: '사원번호'
  },
  {
    key: 'name',
    title: '성명'
  },
  {
    key: 'comments',
    title: '발령내용'
  },
  {
    key: 'etc',
    title: '비고'
  }
])

const tableData = [
  {
    seq: '1',
    type: 'Tom',
    date: 'California',
    emp: 'Los Angeles',
    name: 'No. 189, Grove St, Los Angeles',
    comments: 'CA 90036',
    etc: 'test'
  },
  {
    seq: '2',
    type: 'Tom',
    date: 'California',
    emp: 'Los Angeles',
    name: 'No. 189, Grove St, Los Angeles',
    comments: 'CA 90036',
    etc: 'test'
  },
  {
    seq: '3',
    type: 'Tom',
    date: 'California',
    emp: 'Los Angeles',
    name: 'No. 189, Grove St, Los Angeles',
    comments: 'CA 90036',
    etc: 'test'
  }
]
</script>

<template>
  <BaseTitle text="인사명령" style="margin-top: 60px; margin-left: 118px"></BaseTitle>

  <section class="container">
    <EmpSearchBar></EmpSearchBar>
    <EmpTable :headers="headers" :data="tableData">
      <template #name="{ data }">
        <BaseWhiteButton></BaseWhiteButton>
        <BaseBlueButton></BaseBlueButton>
      </template>
    </EmpTable>
  </section>
</template>

<style lang="scss" scoped>
@import url(./personalAppointment.css);
</style>
