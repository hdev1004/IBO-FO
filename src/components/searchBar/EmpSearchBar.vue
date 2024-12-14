<script setup lang="ts"></script>

<template>
  <section>
    <div class="searchBox">
      <span class="appointTitle">구분</span>
      <select name="empAppointmentList" id="empAppointmentList">
        <option value="appointAll">전체</option>
        <option value="moveDept">부서이동</option>
        <option value="promote">승진</option>
        <option value="leave">휴직</option>
        <option value="retire">퇴직</option>
      </select>

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
