<script setup lang="ts">
import type { commonSelectOptionsType } from '@/types/index'

const value = ref<string>('')
const options = ref<Array<commonSelectOptionsType>>([
  {
    label: '전체',
    value: 'all'
  },
  {
    label: '부서이동',
    value: 'depart'
  },
  {
    label: '승진',
    value: 'promotion'
  },
  {
    label: '휴직',
    value: 'rest'
  },
  {
    label: '퇴직',
    value: 'retire'
  }
])
</script>

<template>
  <section>
    <div class="searchBox">
      <span class="appointTitle">구분</span>
      <el-select v-model="value" placeholder="전체" class="empAppointmentList">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <span class="appointTitle">발령일자</span>
      <span>
        <el-date-picker
          style="width: 280px"
          type="daterange"
          start-placeholder="시작일"
          end-placeholder="종료일"
        />
      </span>

      <BaseBlueButton
        width="80px"
        height="30px"
        font-size="14px"
        text="검색"
        style="position: absolute; left: 850px; top: 143px"
      ></BaseBlueButton>
    </div>

    <hr color="#D2D2D2" size="1" style="margin: 10px 20px 0px 20px" />
  </section>
</template>

<style lang="scss" scoped>
@import url('./EmpSearchBar.css');
</style>
