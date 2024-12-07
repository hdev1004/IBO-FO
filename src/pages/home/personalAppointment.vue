<script setup lang="ts">
const vacationDate = ref(null)
</script>

<template>
  <BaseTitle text="인사명령" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="container">
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
          v-model="vacationDate"
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

    <hr color="#D2D2D2" size="1" style="margin: 10px 20px 10px 20px" />

    <div>
      <table>
        <tr>
          <th>번호</th>
          <th>발령구분</th>
          <th>발령일자</th>
          <th>사원번호</th>
          <th>성명</th>
          <th>발령내용</th>
          <th>비고</th>
        </tr>
        <tr>
          <td>1</td>
          <td>부서이동</td>
          <td>2024-12-07</td>
          <td>2024010103</td>
          <td>허광한</td>
          <td>A개발본부 > B개발본부</td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import url(./personalAppointment.css);
</style>
